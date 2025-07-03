import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import React from "react"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

        {/* BUSCA RAPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image alt="cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image alt="barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              alt="acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
        </div>

        {/* BANNER IMAGE */}
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
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              {/* ESQUERDA */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                  </Avatar>
                  <p className="text-sm">barbearia FSW</p>
                </div>
              </div>
              {/* DIREITA */}
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="text-sm">Junho</p>
                <p className="text-2xl">05</p>
                <p className="text-sm">15:00</p>
              </div>
            </CardContent>
          </Card>
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">2025 Copyright Barbershop</p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
