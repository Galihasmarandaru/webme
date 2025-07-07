import { Timeline } from "@/components/ui/timeline";

export function WorksExperience() {
    const data = [
        {
            title: "2019-2020",
            content: (
                <div>
                    <p className="text-xs font-normal text-neutral-800 md:text-sm ">
                        Built and launched Aceternity UI and Aceternity UI Pro from scratch
                    </p>
                </div>
            ),
        },
        {
            title: "2020-2021",
            content: (
                <div>
                    <p className="text-xs font-normal text-neutral-800 md:text-sm">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                </div>
            ),
        },
        {
            title: "2021-2022",
            content: (
                <div>
                    <p className="text-xs font-normal text-neutral-800 md:text-sm">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                </div>
            ),
        },
        {
            title: "2022-Current",
            content: (
                <div>
                    <p className="text-xs font-normal text-neutral-800 md:text-sm">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
