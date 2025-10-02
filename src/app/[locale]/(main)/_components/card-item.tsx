"use client"

import { counterDiscount } from "@/components/common/use-counter-discount"
import { Card } from "@/components/ui/card"
import { IItemProps } from "@/types"

interface Props {
    item: IItemProps
    discountActive: boolean
}

export default function CardItem({ item, discountActive }: Props) {
    return (
        <>
            {item.is_best && (
                <Card className="relative p-6 bg-[#2a2a2a] border border-yellow-500 rounded-[34px]">
                    {/* Discount badge (asosiy style) */}
                    {item?.price && (
                        <div
                            className="absolute top-0 left-[58px] bg-[#FD5656]
                                        rounded-bl-[8px] rounded-br-[8px]
                                        text-white text-[22px] font-medium
                                        font-[Gilroy] px-3 py-1"
                        >
                            -{counterDiscount(item.price, item.full_price)}%
                        </div>
                    )}
                    <div
                        className="absolute top-4 right-6
                                    text-[#FDB056] text-xs font-bold px-2 py-1
                                    rounded-b-md"
                    >
                        ХИТ!
                    </div>
                    <div className="mt-5 flex items-center justify-center text-center gap-10">
                        {/* Title + Price */}
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h3 className="text-[26px] ml-3 text-white font-medium mb-2">
                                {item.period}
                            </h3>
                            <div className="flex items-baseline gap-2 mb-3">
                                <div className="flex flex-col items-end">
                                    {discountActive ?
                                        <div className="flex flex-col gap-2 items-end">
                                            <span className="text-4xl font-bold text-[#FDB056]">
                                                {item.price}₽
                                            </span>
                                            <span className="text-base text-gray-500 line-through">
                                                {item.full_price}₽
                                            </span>
                                        </div>
                                    :   <div className="animate-fade-in">
                                            <span className="text-4xl font-bold text-white">
                                                {item.full_price}₽
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Description (faqat 2 qator) */}
                        <p className="text-sm text-gray-300 line-clamp-2 max-w-[280px]">
                            {item.text}
                        </p>
                    </div>
                </Card>
            )}
        </>
    )
}
