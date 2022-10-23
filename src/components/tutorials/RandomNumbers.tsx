
import * as React from 'react'


type RandomNumberTpye={
    value:number
}
type PositiveNumber =RandomNumberTpye & {
    isPositive:boolean
    isNegative?:"never",
    isZero?:"never"
}

type NegativeNumber = RandomNumberTpye & {
    isNegative:boolean
    isPositive?:"never"
    isZero?:"never"
}

type Zero= RandomNumberTpye & {
    isZero:boolean
    isPositive?:"never"
    isNegative?:"never"
}

type RandomNumberProps=PositiveNumber |NegativeNumber | Zero
export const RandomNumber =({


    value,
    isPositive,
    isNegative,
    isZero,
}:RandomNumberProps)=>{

return (
    <div>

        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '
        } {isZero && 'zero'}
    </div>
)

}