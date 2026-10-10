"use client";

import Image from "next/image";
import { useState } from "react";

const diagramParts = [
    { name: "650 nm Laser", description: "Sisteme 650 nm dalga boyunda ışık sağlayan lazer kaynağı.", image: "/images/blok_diyagrami_image/lazer.png", left: "0.5%", top: "38%", width: "9.5%", height: "24%" },
    { name: "Polarizer-1", description: "Düzensiz polarizasyona sahip ışığı filtreleyerek düzenli polarize hâle getirir.", image: "/images/blok_diyagrami_image/polarizer_filtre.png", left: "12%", top: "38%", width: "9.5%", height: "24%" },
    { name: "Polarizer-2", description: "Gelen ışığı farklı açılarda polarize eder; prototipin bağımsız değişkenidir.", image: "/images/blok_diyagrami_image/hareketli_polarizer.png", left: "23%", top: "38%", width: "9.5%", height: "24%" },
    { name: "PBS Cube", description: "Fotonları polarizasyon açılarına bağlı olarak s ve p bileşenlerine ayırır.", image: "/images/blok_diyagrami_image/cubekup.png", left: "34%", top: "38%", width: "9.5%", height: "24%" },
    { name: "P Light", description: "PBS Cube tarafından ayrılan p polarizasyon bileşeni.", left: "45%", top: "3%", width: "9.5%", height: "23%" },
    { name: "S Light", description: "PBS Cube tarafından ayrılan s polarizasyon bileşeni.", left: "45%", top: "76%", width: "9.5%", height: "23%" },
    { name: "Photodiode", description: "Optik veriyi elektronik veriye dönüştürmek için ışık şiddetini akıma çevirir.", image: "/images/blok_diyagrami_image/fotodiot.png", left: "56%", top: "3%", width: "9.5%", height: "23%" },
    { name: "Photodiode 2", description: "Optik veriyi elektronik veriye dönüştürmek için ışık şiddetini akıma çevirir.", image: "/images/blok_diyagrami_image/fotodiot.png", left: "56%", top: "76%", width: "9.5%", height: "23%" },
    { name: "Op-Amp", description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.", image: "/images/blok_diyagrami_image/op_amp.png", left: "68%", top: "3%", width: "9.5%", height: "23%" },
    { name: "Op-Amp 2", description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.", image: "/images/blok_diyagrami_image/op_amp.png", left: "68%", top: "76%", width: "9.5%", height: "23%" },
    { name: "ADC-1", description: "P polarizasyon kanalındaki analog sinyali mikrodenetleyicinin okuyabileceği dijital veriye çevirir.", image: "/images/blok_diyagrami_image/adc.png", left: "80%", top: "3%", width: "9.5%", height: "23%" },
    { name: "ADC-2", description: "S polarizasyon kanalındaki analog sinyali mikrodenetleyicinin okuyabileceği dijital veriye çevirir.", image: "/images/blok_diyagrami_image/adc.png", left: "80%", top: "76%", width: "9.5%", height: "23%" },
    { name: "STM32", description: "Sistemi yöneten ve elektronik verileri açı bilgisine çeviren mikrodenetleyicidir.", image: "/images/blok_diyagrami_image/stm32.png", left: "90.5%", top: "36%", width: "9.5%", height: "25%" },
];

export default function HitboxDiagram() {
    const [selectedName, setSelectedName] = useState<string | null>(null);

    return (
        <div className="diagramWrapper">
            <div className="diagram">
                <Image
                    src="/images/hiyerarsi.png"
                    alt="QUANTEULIX Prototip-1 sistem blok diyagramı"
                    width={3803}
                    height={565}
                />
                {diagramParts.map((part) => (
                    <button
                        key={part.name}
                        type="button"
                        className={`hitbox ${selectedName === part.name ? "active" : ""}`}
                        style={{ left: part.left, top: part.top, width: part.width, height: part.height }}
                        aria-label={`${part.name}: ${part.description}`}
                        onClick={() => setSelectedName((current) => current === part.name ? null : part.name)}
                        onMouseEnter={() => setSelectedName(part.name)}
                        onMouseLeave={() => setSelectedName(null)}
                        onFocus={() => setSelectedName(part.name)}
                        onBlur={() => setSelectedName(null)}
                    >
                        {selectedName === part.name && (
                            <span className="diagramPopup">
                                {part.image && (
                                    <Image
                                        className="diagramPopupImage"
                                        src={part.image}
                                        alt=""
                                        width={112}
                                        height={84}
                                    />
                                )}
                                <span className="diagramPopupCopy">
                                    <strong>{part.name}</strong>
                                    <span className="diagramPopupDescription">{part.description}</span>
                                </span>
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
