import type { PcbModel } from "@/data/products";
import PcbViewer from "./PcbViewer";

type PcbShowcaseProps = {
    boards: PcbModel[];
};

export default function PcbShowcase({ boards }: PcbShowcaseProps) {
    return (
        <div className="pcbGrid">
            {boards.map((board, index) => (
                <article className="pcbCard" key={board.id}>
                    <PcbViewer modelUrl={board.modelUrl} label={board.title} />
                    <div className="pcbCardCopy">
                        <p className="productCategory">KART {String(index + 1).padStart(2, "0")}</p>
                        <h3>{board.title}</h3>
                        <p>{board.description}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}
