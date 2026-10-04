"use client";

import Image from "next/image";
import { useState } from "react";

const components = [
    {
        name: "650 nm Laser",
        description: "Sisteme 650 nm dalga boyunda ışık sağlayan lazer kaynağı.",
        left: "0.5%",
        top: "38%",
        width: "9.5%",
        height: "24%",
        image_path: "/images/blok_diyagrami_image/lazer.jpg",
    },
    {
        name: "Polarizer-1",
        description: "Düzensiz polarizasyona sahip ışığı filtreleyerek düzenli polarize hale getirir. Sabittir.​",
        left: "12%",
        top: "38%",
        width: "9.5%",
        height: "24%",
        image_path: "/images/blok_diyagrami_image/polarizer_filtre.png",
    },
    {
        name: "Polarizer-2",
        description: "Gelen ışığı farklı açılarda polarize eder, Prototipin bağımsız değişkenidir.​",
        left: "23%",
        top: "38%",
        width: "9.5%",
        height: "24%",
        image_path: "/images/blok_diyagrami_image/polarizer_filtre.png",
    },
    {
        name: "PBS Cube",
        description: "Farklı açılarda polarize olmuş fotonları açılarına bağlı olarak s ve p olarak ikiye ayırır.​",
        left: "34%",
        top: "38%",
        width: "9.5%",
        height: "24%",
        image_path: "/images/blok_diyagrami_image/cubekup.png",
    },
    {
        name: "P Light",
        description: "PBS Cube tarafından ayrılan P polarizasyon bileşeni.",
        left: "45%",
        top: "3%",
        width: "9.5%",
        height: "23%",
        image_path: "",
    },
    {
        name: "S Light",
        description: "PBS Cube tarafından ayrılan S polarizasyon bileşeni.",
        left: "45%",
        top: "76%",
        width: "9.5%",
        height: "23%",
        image_path: "",
    },
    {
        name: "Photodiode",
        description: "Fotonların Işık şiddetini Akım Şiddetine çevirerek optik veriyi elektronik veriye dönüştürür.​",
        left: "56%",
        top: "3%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/fotodiot.png",
    },
    {
        name: "Photodiode2",
        description: "Fotonların Işık şiddetini Akım Şiddetine çevirerek optik veriyi elektronik veriye dönüştürür.​",
        left: "56%",
        top: "76%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/fotodiot.png",
    },
    {
        name: "Op-Amp",
        description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.​",
        left: "68%",
        top: "3%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/op_amp.png",
    },
    {
        name: "Op-Amp2",
        description: "Akımı voltaja dönüştürür ve sinyali güçlendirir.​",
        left: "68%",
        top: "76%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/op_amp.png",
    },
    {
        name: "ADC-1",
        description: "P polarizasyon kanalındaki analog sinyali dijital veriye çevirerek mikrodenetleyicinin okuyabileceği formata çevirir.​",
        left: "80%",
        top: "3%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/adc.png",
    },
    {
        name: "ADC-2",
        description: "S polarizasyon kanalındaki analog sinyali dijital veriye çevirerek mikrodenetleyicinin okuyabileceği formata çevirir.​",
        left: "80%",
        top: "76%",
        width: "9.5%",
        height: "23%",
        image_path: "/images/blok_diyagrami_image/adc.png",
    },
    {
        name: "STM32",
        description: "Sistemi yöneten ana merkezdir. Elektronik verileri açı bilgisine çeviren mikrodenetleyicidir.​",
        left: "90.5%",
        top: "36%",
        width: "9.5%",
        height: "25%",
        image_path: "/images/blok_diyagrami_image/stm32.png",
    },
];

export default function HitboxDiagram() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="diagramWrapper">
            <div className="diagram">
                <Image
                    src="/images/hiyerarsi.png"
                    alt="QUANTEULIX Prototip-1 sistem blok diyagramı"
                    width={3803}
                    height={565}
                />

                {components.map((component) => (
                    <div
                        key={component.name}
                        className={`hitbox ${hovered === component.name ? "active" : ""
                            }`}
                        style={{
                            left: component.left,
                            top: component.top,
                            width: component.width,
                            height: component.height,
                        }}
                        onMouseEnter={() => setHovered(component.name)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === component.name && (
                            <div className="diagramPopup">
                                <strong>{component.name}</strong>
                                <p>{component.description}</p>
                                {component.image_path ? (
                                    <Image
                                        src={component.image_path}
                                        alt={component.name}
                                        width={3803}
                                        height={565}
                                    />
                                ) : null}
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    );
}