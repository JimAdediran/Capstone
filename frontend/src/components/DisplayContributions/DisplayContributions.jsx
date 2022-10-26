

const DisplayContributions = (props) => {


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>contribution type</th>
                        <th>item</th>
                        <th>date received</th>
                        <th>marked for shipment</th>
                        <th>user_id</th>
                        <th>place_id</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contributions.map((contribution) => {
                        return(
                        <tr key={contribution.id}>
                            <td>{contribution.id}</td>
                            <td>{contribution.contribution_type}</td>
                            <td>{contribution.item}</td>
                            <td>{contribution.date_received}</td>
                            <td>{contribution.marked_for_shipment.toString()}</td>
                            <td>{contribution.user}</td>
                            <td>{contribution.place}</td>
                        </tr>
                    )
    })}
                </tbody>
            </table>
        </div>
    )
    

}

export default DisplayContributions