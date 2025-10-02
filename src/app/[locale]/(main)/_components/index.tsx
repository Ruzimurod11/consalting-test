"use client"

import logo from "@/assets/images/man.png"
import { Button } from "@/components/ui/button"
import { useGet } from "@/hooks/react-query/use-get"
import { IItemProps } from "@/types"
import { Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import CardItem from "./card-item"
import OtherItem from "./other-item"
import Timer from "./timer"

export default function Index() {
    const { data } = useGet<IItemProps[]>("")
    const [discountActive, setDiscountActive] = useState(true)
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white pb-10">
            {/* Header with Timer */}
            <div className="bg-[#1D5B43] space-y-1 py-3 text-center">
                <p className="text-2xl font-semibold leading-[130%] font-[Montserrat]">
                    Успейте открыть пробную неделю
                </p>
                <Timer onEnd={() => setDiscountActive(false)} />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-[40px] font-[Montserrat] md:text-4xl font-bold text-center mb-12">
                    Выбери подходящий для себя{" "}
                    <span className="text-[#FDB056]">тариф</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[87px] max-w-6xl mx-auto">
                    {/* Left Side - Image (1/3 width) */}
                    <div className="flex items-center justify-center md:col-span-1">
                        <Image
                            src={logo}
                            width={450}
                            height={550}
                            alt="Fitness Model"
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* Right Side - Pricing Cards (2/3 width) */}
                    <div className="space-y-6 md:col-span-2">
                        {data?.find((item) => item.is_best) && (
                            <CardItem
                                item={data.find((item) => item.is_best)!}
                                discountActive={discountActive}
                            />
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {data
                                ?.filter((item) => !item.is_best)
                                .map((item) => (
                                    <OtherItem
                                        key={item.id}
                                        item={item}
                                        discountActive={discountActive}
                                    />
                                ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 p-4">
                            <p className="text-sm text-gray-300 mb-4 rounded-2xl p-4 max-w-[25rem] bg-[#2D3233]">
                                Списка пройдет на 3 месяца и более, чтобы
                                получить к 2 раза лучшие результат, чем за 1
                                месяц.
                            </p>
                            <div className="flex items-start gap-2 mb-4">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-400">
                                    Я согласен с{" "}
                                    <a href="#" className="underline">
                                        офертой-пользовательским соглашением
                                    </a>{" "}
                                    и{" "}
                                    <a href="#" className="underline">
                                        Политикой конфиденциальности
                                    </a>
                                    .
                                </p>
                            </div>
                            <Button className="md:max-w-[20rem] w-full bg-[#FDB056] text-black font-bold py-6 text-lg">
                                Купить
                            </Button>
                            <p className="text-xs text-gray-500 mt-3 text-center">
                                Нажимая кнопку "Купить", Вы подтверждаете
                                согласие на автоматическое списание средств для
                                продления подписки после окончания оплаченного
                                периода. Отменить подписку можно в любой момент
                                в настройках аккаунта.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fkdfjlksdf */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="p-6 rounded-[30px] border border-[#484D4E]">
                    {/* Green badge */}
                    <div className="inline-block px-4 py-1 mb-3 text-xl md:text-[28px] font-[Montserrat] leading-[120%] font-medium text-[#81FE95] border border-[#81FE95] rounded-full">
                        гарантия возврата 30 дней
                    </div>

                    {/* Text */}
                    <p className="text-[#DCDCDC] text-2xl leading-[130%]">
                        Мы уверены, что наш план сработает для тебя и ты увидишь
                        видимые результаты уже через 4 недели! Мы даже готовы
                        полностью вернуть твои деньги в течение 30 дней с
                        момента покупки, если ты не получишь видимых
                        результатов.
                    </p>
                </div>
            </div>
        </div>
    )
}
