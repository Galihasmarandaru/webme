"use client";

import { Badge } from "@/components/badge";
import { Tabs } from "@/components/ui/tabs";

export function ProjectsExperience() {
    const tabs = [
        {
            title: "Web Development",
            value: "web",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br bg-primary">
                    <p className="text-3xl font-bold">Web Development</p>
                    <WebContent />
                </div>
            ),
        },
        {
            title: "Mobile Development",
            value: "mobile",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br bg-primary">
                    <p className="text-3xl font-bold">Mobile Development</p>
                    <MobileContent />
                </div>
            ),
        },
        {
            title: "Backend Development",
            value: "backend",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br bg-primary">
                    <p className="text-3xl font-bold">Backend Development</p>
                    <BackendContent />
                </div>
            ),
        },
        {
            title: "Smart Contract Development",
            value: "blockchain",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br bg-primary">
                    <p className="text-3xl font-bold">Smart Contract Development</p>
                    <SmartContractContent />
                </div>
            ),
        },
        {
            title: "Collaboration",
            value: "collaboration",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br bg-primary">
                    <p className="text-3xl font-bold">Collaboration</p>
                    <CollaborationContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[90rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-16 pb-32">
            <p className="mt-36 text-center w-full text-3xl text-primary">Pojects Portfolio</p>
            <Tabs tabs={tabs} />
        </div>
    );
}

const WebContent = () => {
    return (
        <>
            <div className="mt-8">
                <p className="text-xl font-medium">Major Tect Used</p>
                <div className="flex items-center gap-x-2 mt-2 flex-wrap gap-y-2">
                    <Badge text="React Js" />
                    <Badge text="Astro" />
                    <Badge text="Vanilla Js" />
                    <Badge text="Tailwind" />
                    <Badge text="Shadcn" />
                    <Badge text="Daisy UI" />
                    <Badge text="Aceternity UI" />
                    <Badge text="Chakra UI" />
                    <Badge text="Laravel" />
                    <Badge text="SASS" />
                    <Badge text="Supabase" />
                    <Badge text="Vite" />
                    <Badge text="Radix UI" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Personal Projects</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Clustering Automotive Web - Data Mining</li>
                        <li>317 Co - Clothing</li>
                        <li><a className="underline" target="_blank" rel="noopener noreferrer" href="https://reconsproject.com/">Recons Project</a> - Architecture</li>
                        <li><a className="underline" target="_blank" rel="noopener noreferrer" href="https://renahaniem.com/">PT Renahaniem Mulia</a> - Chemical</li>
                        <li><a className="underline" target="_blank" rel="noopener noreferrer" href="https://semayur.netlify.app/">Semayur</a> - Agriculture</li>
                        <li><a className="underline" target="_blank" rel="noopener noreferrer" href="https://www.starbornchemical.com/">Starborn Chemical</a> - Chemical</li>
                        <li><a className="underline" target="_blank" rel="noopener noreferrer" href="https://www.starbornchemical.com/">Webme</a> - Personal Web</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Team Projects</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Avter Booking Apps - Cargo</li>
                        <li>Semesta Tour and Travel - Travel</li>
                        <li>Payment Aggregator Apps - Finance (Confidential)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const MobileContent = () => {
    return (
        <>
            <div className="mt-8">
                <p className="text-xl font-medium">Major Tect Used</p>
                <div className="flex items-center gap-x-2 mt-2 flex-wrap gap-y-2">
                    <Badge text="UIKit" />
                    <Badge text="Swift UI" />
                    <Badge text="Core Data" />
                    <Badge text="RxSwift" />
                    <Badge text="Sprite Kit" />
                    <Badge text="Foundation" />
                    <Badge text="Combine" />
                    <Badge text="Unit Testing" />
                    <Badge text="Jetpack Compose" />
                    <Badge text="Kotlin" />
                    <Badge text="Room Database" />
                    <Badge text="Raw BT Printing" />
                    <Badge text="Flutter" />
                    <Badge text="GetX" />
                    <Badge text="Bloc" />
                    <Badge text="Riverpod" />
                    <Badge text="Dio" />
                    <Badge text="Flavor" />
                    <Badge text="Widget Testing" />
                    <Badge text="Unit Testing" />
                    <Badge text="Integration Testing" />
                    <Badge text="Auto Router" />
                    <Badge text="Go Router" />
                    <Badge text="Push Notification" />
                    <Badge text="Hive" />
                    <Badge text="Sentry" />
                    <Badge text="Firebase Crashlytics" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Android Apps (Personal Projects)</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Order Semayur - Printing Receipt</li>
                        <li>Kin Garage - POS</li>
                        <li>Otak On Fire - Games</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">iOS Apps (Personal Projects)</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>E-Motion - Psychology</li>
                        <li>Fruit Recommendation - Health</li>
                        <li>Twitter Clone - Social Media</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">iOS Apps (Team Projects)</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Ma-In - Insurance Learning Games</li>
                        <li>Dodo - Dog Blood Donor</li>
                        <li>Eativa Customer - Food</li>
                        <li>Eativa Merchant - Food</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Flutter Apps (Team Projects)</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Tracking Avter - Logistic</li>
                        <li>Simpan - Finance</li>
                        <li>Unfilter - Social Media</li>
                        <li>Sukanda Onelink - E-Commerce</li>
                        <li>TxButtler - Finance</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const BackendContent = () => {
    return (
        <>
            <div className="mt-8">
                <p className="text-xl font-medium">Major Tect Used</p>
                <div className="flex items-center gap-x-2 mt-2 flex-wrap gap-y-2">
                    <Badge text="Node JS" />
                    <Badge text="Postgress" />
                    <Badge text="MySQL" />
                    <Badge text="Java Springboot" />
                    <Badge text="Golang" />
                    <Badge text="PHP" />
                    <Badge text="Kotlin" />
                    <Badge text="Sui API" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">REST API</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Tracking Avter API - Logistic</li>
                        <li>Stock In - Store Management</li>
                        <li>Deposit and Lending Coin - Crypto</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Automation</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>TxButtler for Connect Device and Run Bank Transaction - Finance</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const SmartContractContent = () => {
    return (
        <>
            <div className="mt-8">
                <p className="text-xl font-medium">Major Tect Used</p>
                <div className="flex items-center gap-x-2 mt-2 flex-wrap gap-y-2">
                    <Badge text="Ethereum API" />
                    <Badge text="Solidity" />
                    <Badge text="Metamask API" />
                    <Badge text="Javascript" />
                    <Badge text="PHP" />
                    <Badge text="SUI API" />
                    <Badge text="NAVI SDK" />
                    <Badge text="SUILEND SDK" />
                    <Badge text="Sui Move" />
                    <Badge text="React Js" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Personal Projects</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Moodle Plugin - Learning Management System</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Team Projects</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>DeFi Apps - Finance</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const CollaborationContent = () => {
    return (
        <>
            <div className="mt-8">
                <p className="text-xl font-medium">Major Tect Used</p>
                <div className="flex items-center gap-x-2 mt-2 flex-wrap gap-y-2">
                    <Badge text="Ethereum API" />
                    <Badge text="Solidity" />
                    <Badge text="Metamask API" />
                    <Badge text="Javascript" />
                    <Badge text="PHP" />
                    <Badge text="SUI API" />
                    <Badge text="NAVI SDK" />
                    <Badge text="SUILEND SDK" />
                    <Badge text="Sui Move" />
                    <Badge text="React Js" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-xl font-medium">Team Projects</p>
                <div className="mt-2">
                    <ul className="list-disc list-inside ml-2">
                        <li>Avter Booking Apps - Logistic</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

