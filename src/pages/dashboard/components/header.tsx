import { FlipWords } from "@/components/ui/flip-words";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Header() {
    const words = ["to Code", "phylosophical thing", "to play games", "to sleep and healing"];

    function handleGithubClick() {
        window.open("https://github.com/Galihasmarandaru", "_blank", "noopener, noreferrer");
    }

    return (
        <div className="flex items-center justify-center h-screen relative">
            <div className="absolute flex items-center gap-x-4 top-8 left-8 sm:left-16">
                <GitHubLogoIcon className="text-primary size-6 cursor-pointer" onClick={handleGithubClick} />
            </div>
            <div className="text-center">
                <div className="text-5xl font-normal font-header-name text-primary">
                    Hi, I'm Galih
                </div>
                <div className="text-4xl mt-4 font-normal font-header-description text-primary">
                    I love <FlipWords words={words} /> <br />
                </div>
            </div>
        </div>
    )
}