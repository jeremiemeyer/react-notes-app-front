import Edit from "./../assets/edit.svg"
import { useState } from "react"
import { createPortal } from "react-dom"
import AddNoteModal from "./AddNoteModal"

export default function CreateNoteButton() {
  const [showNewNoteModal, setShowNewNoteModal] = useState(false)
  return (
    <>
        <button 
        onClick={() => setShowNewNoteModal(!showNewNoteModal)}
        className="flex-item hover:bg-slate-600"
        >
            <img
                src={Edit}
                alt="New Note" 
            />
        </button>
        {showNewNoteModal && createPortal(<AddNoteModal onClose={() => setShowNewNoteModal(false)}/>, document.body)}
    </>
  )
}