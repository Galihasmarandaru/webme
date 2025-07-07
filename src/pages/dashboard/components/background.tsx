import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function Background() {
    const words = `I love to learn about software, logical thinking, design pattern, design thinking, UX, business, how to solve problem, deep research on developing solution or product, and some philosophical of life.    
    My general interest of work are in product, solution, investment, and technology. To solve more problem or build a product, I prefer to start from fundamental. It helps me find the solution for each problem more practical. I learn by connecting the dot with high curiosity. To increase my undestanding I do repetition.
    `;
    return (
        <div className="flex items-center bg-primary justify-center py-16">
            <TextGenerateEffect words={words} className="mx-auto text-center w-3/4" />
        </div>
    )
}

