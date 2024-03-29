import React from 'react'

const Article = () => {
    return (
        <>
            <section className="py-20 px-5 sm:px-5">
                <div className="max-w-6xl mx-auto">
                    {/* HEADER */}
                    <div className="header text-center">
                        <h3 className="text-md uppercase tracking-wider font-semibold text-blue-600 lg:text-md">Article</h3>
                        <h2 className="mt-2 baloo text-2xl font-semibold capitalize text-black lg:text-4xl">Read Our Latest Blog</h2>
                        <h2 className="mt-1 text-sm font-normal text-black mx-auto w-[90%] lg:w-[40%]">We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</h2>
                    </div>
                    {/* BODY */}
                    <div className="article_body mt-10">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-8">
                            {/* FIRST CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://s3-alpha-sig.figma.com/img/2e2e/4f1f/cebc2ca8a79f82fa1a5ff81bccdbc0d9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pnJQgtZNq~Xas8QgYXel8dI8mmd28ii31UWN4BU7LlGlhKxjqPNaiZ6UlPswRuZwE3kF54p6EDDN9YWmOmwk9cqEA1y4Ov89ASw-1-HZxXl1Qy6sxfEibyLHc99TVfCNE97GsQTLxKqF2Y-VBWxxmaiKR1RAfOEgnfQxd4veJ-XlDRZY7pKlw8YQE217wY-BHkMbdHb-CAJOcj95j545tW~zJHqSu7gVESXC7ttsnr-zn-IL1LaUSu3Lr2ElXXdAJAx2rch1XBYisVtr6bTVfMwYHQOe9YXht100jq8tryj1wo0ERwpPnNXBPS14jhbIFZo9MYcwpccnN1oLEiJX5Q__" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>3D Animation</h3>
                                    <p className='mt-1.5 text-sm w-full'>This is the text in the Card which will show some data of blog</p>
                                    <button className='mt-1.5 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</button>
                                </div>
                            </div>
                            {/* SECOND CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://s3-alpha-sig.figma.com/img/9a5c/9c97/95b7ada1c1cded7251e3744ede000efb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7UbSXrqG2ChfPGyPkvHD-a87FEvIsAteQcSN3iNMDePqR5iZiYVQyVYAopHVyvHrluzcCugovaE0Hpl8f03cl3PIu8n1f3o2VlKrm0ZZVbKmJz6F2IOtmZnBnPxFCrHAA9P0R3xgXMJjUw6RttguHCs5u33HpeZOKYBb6HRYwVWVy8sxuCte4n1ibDUu5TTbN57yvfFaIkTeM~4LHtMPqjDhKUSNo7Aib-9vsvCagDSZgcO37QYiFgklLXI7UJX0iDiHsQbP9sHw1ecKbTI8rp4nXOsjbk4LOsXRh3XRyW8BBeR4pAq7AXwPHLgC66YCbDjvmTaBbp0TtYbBO~t0Q__" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>3D Animation</h3>
                                    <p className='mt-1.5 text-sm w-full'>This is the text in the Card which will show some data of blog</p>
                                    <button className='mt-1.5 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</button>
                                </div>
                            </div>
                            {/* THIRD CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://s3-alpha-sig.figma.com/img/5c4c/a5f7/a689fb4b72e5d62e39ed1473b01e12a6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bb2~Yx1gYp-UL~NkyeZuNvUrRWROkkkQNA84bUNAYyeUs-I2p1u4Bt7flSrRKNW-xM45rqhNErECbMkW0VQji7DgO5PF~MefcEg5fyLsa1deldiWBgg7q5TWGYBVUBLDhrNBfS7fBvJW9nPr1k1zhHZO2BwOsLvj7N1uXmJOspEkxb~33EV2c~QWOqpG9GPsVp9llyoVup9jJTq4mlCgVFFsPvOEELTx~mh1NNetRmYr8Q~aF~H2z2AHBVoIK4SBoQpPYMAitEDbA~FErCNS164X1RlXoOJu9qERhDfl5lK602Da6UmyIGyh7wEMnnM5LKcE2t2A6tpBjs-MfBBE7A__" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>3D Animation</h3>
                                    <p className='mt-1.5 text-sm w-full'>This is the text in the Card which will show some data of blog</p>
                                    <button className='mt-1.5 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</button>
                                </div>
                            </div>
                            {/* FORTH CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://s3-alpha-sig.figma.com/img/9a5c/9c97/95b7ada1c1cded7251e3744ede000efb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7UbSXrqG2ChfPGyPkvHD-a87FEvIsAteQcSN3iNMDePqR5iZiYVQyVYAopHVyvHrluzcCugovaE0Hpl8f03cl3PIu8n1f3o2VlKrm0ZZVbKmJz6F2IOtmZnBnPxFCrHAA9P0R3xgXMJjUw6RttguHCs5u33HpeZOKYBb6HRYwVWVy8sxuCte4n1ibDUu5TTbN57yvfFaIkTeM~4LHtMPqjDhKUSNo7Aib-9vsvCagDSZgcO37QYiFgklLXI7UJX0iDiHsQbP9sHw1ecKbTI8rp4nXOsjbk4LOsXRh3XRyW8BBeR4pAq7AXwPHLgC66YCbDjvmTaBbp0TtYbBO~t0Q__" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>3D Animation</h3>
                                    <p className='mt-1.5 text-sm w-full'>This is the text in the Card which will show some data of blog</p>
                                    <button className='mt-1.5 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Article
