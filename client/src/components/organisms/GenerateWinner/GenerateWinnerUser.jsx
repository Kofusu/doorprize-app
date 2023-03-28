import { RegularText, SemiBoldText } from "@/components/atoms/Texts"
import { apiEndpoint } from "@/configs/config"
import React, { useEffect, useState } from "react"
import { RandomReveal } from "react-random-reveal"
import { socket } from "@/socket"

const GenerateWinner = ({ prize = {}, winner = [] }) => {
  let { max_winner = 0 } = prize

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [isGenerate, setIsGenerate] = useState(false)
  const [winnerState, setWinnerState] = useState(winner)
  const [char, setChar] = useState(
    winner.length ? `Pemenang ${prize.nama_prize}` : "Menunggu...",
  )
  const [columnWinner, setColumnWinner] = useState(
    max_winner <= 10 ? "grid-cols-1" : max_winner <= 20 ? "grid-cols-2" : max_winner <= 30 ? "grid-cols-3" : 'grid-cols-4'
  )
console.log(columnWinner);
  useEffect(() => {
    setWinnerState(winner)

    setChar(winner.length ? `Pemenang ${prize.nama_prize}` : "Menunggu...",)

    setColumnWinner(
      max_winner <= 10 ? "grid-cols-1" : max_winner <= 20 ? "grid-cols-2" : max_winner <= 30 ? "grid-cols-3" : 'grid-cols-4'
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

  return (
    <div className="px-5 py-4 overflow-auto h-screen">
      <div className="flex items-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center bg-opacity-40">
          <img
            src={`${apiEndpoint}/public/img/${prize.nama_gambar}`}
            alt=""
            className="min-h-[100px] h-[300px] w-[300px] object-contain"
          />
          <SemiBoldText className="text-[24px] bg-primary py-2 rounded-[1000px] flex flex-col items-center text-center w-[75%]">
            <div>{prize.max_winner} Unit</div>
            <div>{prize.nama_prize}</div>
          </SemiBoldText>
        </div>
        <div className="flex-[2] bg-[#FFC93C] h-[80%] bg-opacity-70 mx-12 overflow-auto relative  rounded-xl">
          <header className="h-[102px] sticky top-0 bg-[#FFC93C] after:bg-[#98989866] after:absolute after:inset-0 flex items-center">
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
          <div className={`grid gap-8 ${columnWinner} p-4`}>
            {winnerState?.map((win, i) => (
              <div
                key={win.id_user}
                className="flex items-center gap-2 border-b-cusBlack border-dotted border-b-[1px]"
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
        </div>
      </div>
    </div>
  )
}

export default GenerateWinner
