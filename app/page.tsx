import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import React from "react"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rafael</h2>
        <p>Sexta-feira, 25 de junho.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="barber-image"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          {/* agendamento */}
          <Card className="mt-6">
            <CardContent className="flex justify-between p-0">
              {/* ESQUERDA */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge>Confirmado</Badge>
              </div>
              {/* DIREITA */}
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="text-sm">Junho</p>
                <p className="text-2xl">05</p>
                <p className="text-sm">15:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
