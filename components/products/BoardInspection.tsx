"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PcbModel } from "@/data/products";
import PcbViewer from "./PcbViewer";

type BoardInspectionProps = {
    board: PcbModel;
    schematicUrl: string;
};

const schematicPoints = [
    {
        id: "sensor-inputs",
        name: "NTC",
        description:
            "NTC termistörleri ve gerilim bölücü devre, sıcaklığı ADC tarafından okunabilecek analog bir gerilime dönüştürür.",
        left: "16%",
        top: "27%",
    },
    {
        id: "adc",
        name: "ADS114S06 — ADC",
        description:
            "Analog sinyali dijital veriye dönüştürür ve mikrodenetleyiciye SPI üzerinden aktarır.",
        left: "44%",
        top: "35%",
    },
    {
        id: "spi",
        name: "LTC4332 — SPI arayüzü",
        description:
            "Ölçüm kartı ile sistemin geri kalanı arasındaki SPI veri iletişimini sağlar.",
        left: "66%",
        top: "36%",
    },
    {
        id: "regulator",
        name: "LDO (5 V → 3,3 V)",
        description:
            "Düşük gürültülü lineer bir voltaj regülatörüdür",
        left: "17%",
        top: "65%",
    },
    {
        id: "power",
        name: "Besleme filtreleri",
        description:
            "Kapasitör ve ferrit elemanlar besleme hatlarındaki gürültüyü azaltmaya yardımcı olur.",
        left: "49%",
        top: "70%",
    },
] as const;

export default function BoardInspection({
    board,
    schematicUrl,
}: BoardInspectionProps) {
    const [activePoint, setActivePoint] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [zoom, setZoom] = useState(1.25);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isExpanded && !dialog.open) {
            dialog.showModal();
        } else if (!isExpanded && dialog.open) {
            dialog.close();
        }
    }, [isExpanded]);

    const openExpandedView = () => {
        setZoom(1.25);
        setIsExpanded(true);
    };

    return (
        <div className="boardInspection">
            <article className="boardInspectionPanel schematicPanel">
                <div className="boardPanelHeading">
                    <div>
                        <p className="productCategory">DEVRE ŞEMATİĞİ</p>
                        <h3>{board.title}</h3>
                    </div>
                    <div className="schematicPanelActions">
                        <button
                            className="schematicExpandButton"
                            type="button"
                            onClick={openExpandedView}
                            aria-haspopup="dialog"
                        >
                            Büyüt
                            <span aria-hidden="true">⤢</span>
                        </button>
                    </div>
                </div>

                <div className="schematicCanvas">
                    <Image
                        src={schematicUrl}
                        alt={`${board.title} elektronik devre şematiği`}
                        width={2000}
                        height={1413}
                        sizes="(max-width: 860px) 100vw, 55vw"
                    />
                    {schematicPoints.map((point) => (
                        <button
                            key={point.id}
                            type="button"
                            className={`schematicPoint${activePoint === point.id ? " isActive" : ""}`}
                            style={{ left: point.left, top: point.top }}
                            aria-label={`${point.name}: ${point.description}`}
                            aria-pressed={activePoint === point.id}
                            onClick={() =>
                                setActivePoint((current) =>
                                    current === point.id ? null : point.id,
                                )
                            }
                            onMouseEnter={() => setActivePoint(point.id)}
                            onMouseLeave={() => setActivePoint(null)}
                            onFocus={() => setActivePoint(point.id)}
                            onBlur={() => setActivePoint(null)}
                        >
                            <span className="schematicPointDot" aria-hidden="true" />
                            {activePoint === point.id && (
                                <span className="schematicPointPopup">
                                    <strong>{point.name}</strong>
                                    <span>{point.description}</span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                <p className="boardPanelHint">
                    Bileşen açıklamalarını görmek için şematik üzerindeki noktalara
                    gelin veya dokunun. Yazıları ayrıntılı incelemek için şematiği büyütün.
                </p>
            </article>

            <article className="boardInspectionPanel modelPanel">
                <div className="boardPanelHeading">
                    <div>
                        <p className="productCategory">3B KART GÖRÜNÜMÜ</p>
                        <h3>{board.title}</h3>
                    </div>
                    <span className="boardPanelTag">360°</span>
                </div>
                <PcbViewer modelUrl={board.modelUrl} label={board.title} />
                <p className="boardModelDescription">{board.description}</p>
            </article>

            <dialog
                ref={dialogRef}
                className="schematicLightbox"
                aria-labelledby="schematicLightboxTitle"
                onClose={() => setIsExpanded(false)}
                onClick={(event) => {
                    if (event.target === dialogRef.current) {
                        dialogRef.current?.close();
                    }
                }}
                onKeyDown={(event) => {
                    if (event.key === "Escape") {
                        dialogRef.current?.close();
                    }
                }}
            >
                <div className="schematicLightboxContent">
                    <div className="schematicLightboxHeader">
                        <div>
                            <p className="productCategory">DEVRE ŞEMATİĞİ</p>
                            <h2 id="schematicLightboxTitle">{board.title}</h2>
                        </div>
                        <div className="schematicZoomControls" aria-label="Şematik yakınlaştırma">
                            <button
                                type="button"
                                aria-label="Uzaklaştır"
                                disabled={zoom <= 1}
                                onClick={() => setZoom((current) => Math.max(1, current - 0.25))}
                            >
                                −
                            </button>
                            <span>{Math.round(zoom * 100)}%</span>
                            <button
                                type="button"
                                aria-label="Yakınlaştır"
                                disabled={zoom >= 3}
                                onClick={() => setZoom((current) => Math.min(3, current + 0.25))}
                            >
                                +
                            </button>
                            <button
                                className="schematicZoomReset"
                                type="button"
                                onClick={() => setZoom(1)}
                            >
                                Sığdır
                            </button>
                            <button
                                className="schematicCloseButton"
                                type="button"
                                aria-label="Şematiği kapat"
                                onClick={() => dialogRef.current?.close()}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                    <div className="schematicZoomStage">
                        <div
                            className="schematicCanvas schematicCanvasZoomed"
                            style={{ width: `${zoom * 100}%` }}
                        >
                            <Image
                                src={schematicUrl}
                                alt={`${board.title} elektronik devre şematiği`}
                                width={2000}
                                height={1413}
                                sizes="90vw"
                            />
                            {schematicPoints.map((point) => (
                                <button
                                    key={point.id}
                                    type="button"
                                    className={`schematicPoint${activePoint === point.id ? " isActive" : ""}`}
                                    style={{ left: point.left, top: point.top }}
                                    aria-label={`${point.name}: ${point.description}`}
                                    aria-pressed={activePoint === point.id}
                                    onClick={() =>
                                        setActivePoint((current) =>
                                            current === point.id ? null : point.id,
                                        )
                                    }
                                    onMouseEnter={() => setActivePoint(point.id)}
                                    onMouseLeave={() => setActivePoint(null)}
                                    onFocus={() => setActivePoint(point.id)}
                                    onBlur={() => setActivePoint(null)}
                                >
                                    <span className="schematicPointDot" aria-hidden="true" />
                                    {activePoint === point.id && (
                                        <span className="schematicPointPopup">
                                            <strong>{point.name}</strong>
                                            <span>Kartı incelemek için sürükleyiniz.</span>
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
