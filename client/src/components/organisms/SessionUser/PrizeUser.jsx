import { SemiBoldText } from "@/components/atoms/Texts"
import { apiEndpoint } from "@/configs/config"
import React from "react"
import { Link } from "react-router-dom"

const PrizeUser = ({ highlightPrize }) => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-20 gap-4 min-h-[70vh]">
      {highlightPrize?.map((prize, i) => (
        <Link key={prize.id_prize} to={`${prize.id_prize}`}>
          <div
            className={`w-[400px] cursor-pointer flex items-center flex-col rounded-xl flex-wrap flexingUser ${
              highlightPrize.length === 3 && i === 1
                ? "translate-y-20"
                : i !== 1 && highlightPrize.length === 3
                ? "-translate-y-20"
                : ""
            }`}
          >
            <img
              alt={prize.nama_prize}
              src={`${apiEndpoint}/public/img/${prize.nama_gambar}`}
              className="min-h-[100px] hover:scale-125 mb-2 w-[302px] h-[200px] object-contain"
            />
            <SemiBoldText className="bg-primary rounded-[1000px] text-[20px] flex w-[80%] flex-col items-center leading-[1.5rem] mx-auto text-center">
              <div>{prize.max_winner} unit</div>
              <div>{prize.nama_prize}</div>
            </SemiBoldText>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PrizeUser
