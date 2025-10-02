import { counterDiscount } from "@/components/common/use-counter-discount"
import { Card } from "@/components/ui/card"
import { IItemProps } from "@/types"

interface Props {
    item: IItemProps
    discountActive: boolean
}

export default function OtherItem({ item, discountActive }: Props) {
    if (item.is_best) return null
    return (
        <>
            <Card
                className="relative p-4 bg-[#2a2a2a] border border-[#3a3a3a]
                                       hover:border-yellow-500/50 transition-all rounded-[34px]"
            >
                {/* Discount badge (asosiy style bilan) */}
                {item.price && (
                    <div
                        className="absolute top-0 left-[51px] bg-[#FD5656]
                                                rounded-bl-[6px] rounded-br-[6px]
                                                text-white text-[18px] font-medium
                                                font-[Gilroy] px-2 py-0.5"
                    >
                        -{counterDiscount(item.price, item.full_price)}%
                    </div>
                )}
                <div className="flex flex-col">
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-lg text-white font-semibold mb-1">
                            {item.period}
                        </h3>
                        <div className="flex flex-col items-end gap-2 mb-2">
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
                    <p className="text-sm text-gray-400">{item.text}</p>
                </div>
            </Card>
        </>
    )
}
