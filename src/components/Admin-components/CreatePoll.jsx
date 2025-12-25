import './poll-dashboard.css'
export default function CreatePoll({openPollForm, setOpenPollForm}){
    return(
        <>
        <div className="create-poll" onClick={()=>setOpenPollForm(true)}>
            <h3>Create a Poll</h3>
            <p>Run polls and Q&A in your browser.</p>
        </div><br/>
        <div className='create-poll'>
              <h3>Set up slido in your tools</h3>
            <p>Get started in integrations</p>
        </div>
        </>
    )
}