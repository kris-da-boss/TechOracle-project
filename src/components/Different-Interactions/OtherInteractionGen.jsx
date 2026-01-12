import { ArrowBigLeftIcon, Dice3Icon, Play, ReceiptRussianRuble, Settings, Trash2Icon } from "lucide-react"

export default function OtherInteractionGen(){
return(
    <>
    <div>
        <div>
        <select name="sdag" id="">
          <option value="">
            Multiple Choice
          </option>
          <option value="">Word cloud</option>
          <option value="">Open text</option>
          <option value="">Ranking</option>
          <option value="">Rating</option>
        </select>
        
        <div>
          <Trash2Icon/>
          <Settings/>
        </div>
        </div>
        <input type="text" placeholder="What would you like to ask?" />

        </div>
    </>
)
}