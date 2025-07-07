export function Badge({ text }: { text: string }) {
    return (
        <div className="bg-primary-light px-4 py-1 rounded-md text-white">
            <p>{text}</p>
        </div>
    )
}