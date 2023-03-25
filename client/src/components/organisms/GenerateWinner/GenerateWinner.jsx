import { ContainerMain } from "@/components/atoms/Container"
import { RegularText } from "@/components/atoms/Texts"
import { apiEndpoint } from "@/configs/config"
import React, { useEffect, useState } from "react"
import { RandomReveal } from "react-random-reveal"
import { socket } from "@/socket"
import { ExportExcelButton } from "@/components/molecules/ExportExcelButton"
import { NoBGButton } from "@/components/atoms/Buttons"
import { Link } from "react-router-dom"

const GenerateWinner = ({ prize = {}, winner = [] }) => {
  let { max_winner = 0 } = prize

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [isGenerate, setIsGenerate] = useState(false)
  const [winnerState, setWinnerState] = useState(winner)
  const [char, setChar] = useState(
    winner.length ? `Pemenang ${prize.nama_prize}` : "Menunggu...",
  )
  const [columnWinner, setColumnWinner] = useState(
    max_winner <= 10
      ? "grid-cols-1"
      : max_winner <= 20
      ? "grid-cols-2"
      : max_winner <= 30
      ? "grid-cols-3"
      : "grid-cols-4",
  )
  useEffect(() => {
    setWinnerState(winner)

    setChar(winner.length ? `Pemenang ${prize.nama_prize}` : "Menunggu...")

    setColumnWinner(
      max_winner <= 10
        ? "grid-cols-1"
        : max_winner <= 20
        ? "grid-cols-2"
        : max_winner <= 30
        ? "grid-cols-3"
        : "grid-cols-4",
    )

    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onGenerateWinner(value) {
      for (let i = 0; i <= value.length; i++) {
        setTimeout(async () => {
          setIsGenerate(true)

          setTimeout(() => {
            if (i === value.length) {
              setTimeout(() => {
                setIsGenerate(false)
                setChar(`Pemenang ${prize.nama_prize}`)
              }, 500)
            } else {
              setChar(value[i].nama_user)
              setWinnerState((prevVal) => [...prevVal, value[i]])
              setIsGenerate(false)
            }
          }, 1000)
        }, i * 2000)
      }
    }

    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)
    socket.on("generateWinner", onGenerateWinner)

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
      socket.off("generateWinner", onGenerateWinner)
    }
  }, [winner, setWinnerState])

  const generateWinner = () => {
    socket.emit("generate", {
      id_prize: prize.id_prize,
      max_winner: prize.max_winner,
    })
  }

  return (
    <ContainerMain className="px-5 py-3 my-4 overflow-auto h-[585px]">
      <div className="flex items-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center bg-opacity-40">
          <img
            src={`${apiEndpoint}/public/img/${prize.nama_gambar}`}
            alt=""
            width={300}
            height={300}
            className="min-h-[100px] mb-10"
          />
          <RegularText className="text-[24px]">
            {prize.nama_prize} - {prize.max_winner} Unit
          </RegularText>
        </div>
        <div className="flex-[2] relative h-[90%] bg-[#A2D5F2] bg-opacity-40 overflow-auto rounded-xl group">
          <header className="h-[102px] top-0 bg-[#FFC93C] flex items-center">
            <div
              onClick={generateWinner}
              className="h-full flex justify-center items-center"
            >
              {!winnerState.length && (
                <RegularText className="cursor-pointer h-[85%] shadow-xl mx-4 rounded-full w-[88px] bg-[#E2E2E2] flex items-center justify-center text-center">
                  Start Generate
                </RegularText>
              )}
            </div>
            <RegularText className="text-[36px] flex-1 text-center">
              {isGenerate ? (
                <RandomReveal
                  isPlaying={isGenerate}
                  duration={1000}
                  characters={char}
                  revealEasing="random"
                />
              ) : (
                <span>{char}</span>
              )}
            </RegularText>
          </header>
          <div className={`grid gap-8 ${columnWinner} p-4 h-[68%] overflow-auto`}>
            {winnerState?.map((win, i) => (
              <div
                key={win.id_user}
                className="flex items-center gap-2 border-b-cusBlack border-dotted border-[1px]"
              >
                <span className="px-3 rounded-md py-1 border-[1px] border-cusBlack">
                  {i + 1}
                </span>
                <RegularText className="text-[20px] text-center flex-1">
                  {win.nama_user} ({win.nama_pt})
                </RegularText>
              </div>
            ))}
          </div>
          <div className="px-2 py-2 bottom-0 flex">
            <Link
              to="/admin/users"
              className="flex items-center justify-center border-[#07689F] flex-1"
            >
              <NoBGButton type className="flex items-center justify-center bg-[#A2D5F2] border-secondaryAdmin flex-1 bg-opacity-40 text-[14px]">
                See List Users
              </NoBGButton>
            </Link>
            <ExportExcelButton
              title="Save Winner"
              type="m"
              excelData={winnerState}
              fileName={`pemenang-${prize.nama_prize}-${prize.id_prize}`}
            />
          </div>
        </div>
      </div>
    </ContainerMain>
  )
}

export default GenerateWinner
