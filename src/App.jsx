import NoteRightSideBar from "./components/NoteRightSideBar"
import LeftSideBar from "./components/LeftSideBar"
import NotesList from "./components/NotesList"
import RightSide from "./components/RightSide"
import { useSelector } from "react-redux"
import NotificationCentre from "./components/NotificationCentre"
import TopUserBar from "./components/TopUserBar"

function App() {
  const selectedNote = useSelector((state) => state.shownotes.noteToShow)

  return (
    <>
      <div className="flex flex-col max-h-screen">
        <div>
          <TopUserBar />
        </div>

        <div className="flex flex-row max-h-[calc(100vh-40px)]">
          <div className="flex flex-item">
            <LeftSideBar />
          </div>
          <div className="flex flex-item bg-slate-800">
            <NotesList />
          </div>
          <div className="flex flex-col flex-item w-screen bg-slate-200 px-4">
            {selectedNote.title === "" ? <RightSide /> : <NoteRightSideBar />}
            <NotificationCentre />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col max-h-screen">
        <div className="flex flex-col ">
          <TopUserBar />
        
          <div className="flex flex-item">
            <div className="flex flex-item">
              <LeftSideBar />
            </div>
            <div className="flex flex-item">
              <NotesList />
            </div>
            <div className="flex flex-col flex-item w-screen bg-slate-200 px-4">
              {selectedNote.title === "" ? <RightSide /> : <NoteRightSideBar />}
              <NotificationCentre />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
