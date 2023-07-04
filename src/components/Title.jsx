export default function Title({ name }) {
    return (
        <div className="text-4xl lg:text-5xl pl-4 border-l-[4px] border-sky-300 capitalize ml-2 justify-self-start" >
            {name}
        </div>
    );
}