

const DisplayContributions = (props) => {


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>contribution_type</th>
                        <th>item</th>
                        <th>date_received</th>
                        <th>marked_for_shipment</th>
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
                            <td>{contribution.marked_for_shipment}</td>
                            <td>{contribution.user_id}</td>
                            <td>{contribution.place_id}</td>
                        </tr>
                    )
    })}
                </tbody>
            </table>
        </div>
    )
    

}

export default DisplayContributions