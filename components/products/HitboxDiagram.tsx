"use client";

import Image from "next/image";
import { useState } from "react";

const diagramParts = [
    { name: "650 nm Laser", description: "Sisteme 650 nm dalga boyunda ışık sağlayan lazer kaynağı.", left: "0.5%", top: "38%", width: "9.5%", height: "24%" },
    { name: "Polarizer-1", description: "Düzensiz polarizasyona sahip ışığı filtreleyerek düzenli polarize hâle getirir.", left: "12%", top: "38%", width: "9.5%", height: "24%" },
    { name: "Polarizer-2", description: "Gelen ışığı farklı açılarda polarize eder; prototipin bağımsız değişkenidir.", left: "23%", top: "38%", width: "9.5%", height: "24%" },
    { name: "PBS Cube", description: "Fotonları polarizasyon açılarına bağlı olarak s ve p bileşenlerine ayırır.", left: "34%", top: "38%", width: "9.5%", height: "24%" },
    { name: "P Light", description: "PBS Cube tarafından ayrılan p polarizasyon bileşeni.", left: "45%", top: "3%", width: "9.5%", height: "23%" },
    { name: "S Light", description: "PBS Cube tarafından ayrılan s polarizasyon bileşeni.", left: "45%", top: "76%", width: "9.5%", height: "23%" },
    { name: "Photodiode", description: "Optik veriyi elektronik veriye dönüştürmek için ışık şiddetini akıma çevirir.", left: "56%", top: "3%", width: "9.5%", height: "23%" },
    { name: "Photodiode 2", description: "Optik veriyi elektronik veriye dönüştürmek için ışık şiddetini akıma çevirir.", left: "56%", top: "76%", width: "9.5%", height: "23%" },
    { name: "Op-Amp", description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.", left: "68%", top: "3%", width: "9.5%", height: "23%" },
    { name: "Op-Amp 2", description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.", left: "68%", top: "76%", width: "9.5%", height: "23%" },
    { name: "ADC-1", description: "P polarizasyon kanalındaki analog sinyali mikrodenetleyicinin okuyabileceği dijital veriye çevirir.", left: "80%", top: "3%", width: "9.5%", height: "23%" },
    { name: "ADC-2", description: "S polarizasyon kanalındaki analog sinyali mikrodenetleyicinin okuyabileceği dijital veriye çevirir.", left: "80%", top: "76%", width: "9.5%", height: "23%" },
    { name: "STM32", description: "Sistemi yöneten ve elektronik verileri açı bilgisine çeviren mikrodenetleyicidir.", left: "90.5%", top: "36%", width: "9.5%", height: "25%" },
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
                                <strong>{part.name}</strong>
                                <span>{part.description}</span>
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
