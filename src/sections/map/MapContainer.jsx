import Title from "../../components/Title";
import Map from "./Map";

export default function MapContainer() {
    return (
        <div id="map" className="container mx-auto flex flex-col justify-center gap-y-6 py-12">
            <Title name={"Map of Kazakhstan"} />
            <div className="w-full flex justify-center items-center">
                <Map />
            </div>
        </div>
    );
}