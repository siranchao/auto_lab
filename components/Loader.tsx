import Image from "next/image"


export default function Loader() {


    return (
        <div className="my-20 w-full flex-center">
            <Image
            src="/tire.svg"
            alt="loader"
            width={50}
            height={50}
            className="object-contain animate-spin"
            />
        </div>
    )
}