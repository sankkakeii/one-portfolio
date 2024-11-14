import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Experience() {
    return (
        <div className="text-white p-6 md:p-12 mb-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Experience</h1>

                    <p className="text-gray-400 text-lg">
                        Team Syntegra&apos;s extensive experience covers a broad range of industries, including finance, healthcare, and e-commerce.
                    </p>

                    <p className="text-gray-400 text-lg">
                        Here are a few examples of how we&apos;ve helped clients achieve their goals by leveraging cloud solutions, automation, and infrastructure optimization.
                    </p>

                    <p className="text-gray-400 text-lg">
                        Each project reflects our commitment to quality, collaboration, and results.
                    </p>
                </div>

                <div className="lg:w-1/2 grid gap-6">
                    <Card className="bg-zinc-900 border-zinc-800 text-white col-span-2">
                        <CardHeader>
                            <h3 className="text-xl font-semibold">Financial Services Cloud Optimization</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">
                                Revamped cloud infrastructure for improved performance and cost efficiency.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800 text-white">
                        <CardHeader>
                            <h3 className="text-xl font-semibold">Health Care Data Security</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">
                                Implemented advanced security measures ensuring compliance with healthcare regulations.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800 text-white">
                        <CardHeader>
                            <h3 className="text-xl font-semibold">E-Commerce Platform Scaling</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">
                                Scaled e-commerce infrastructure to handle % during peak seasons.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}