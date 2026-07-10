import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPatients = () => {

    const [pdata, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(

            (response) => (
                changeData(response.data)
            )
        ).catch()

    }

    useEffect(
        () => (
            fetchData()
        ),[]
    )

    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover table-bordered align-middle text-center">
                                        <thead class="table-primary">
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Blood Group</th>
                                                <th>Doctor</th>
                                                <th>Disease</th>
                                                <th>Room</th>
                                                <th>Admission Date</th>
                                                <th>Mobile</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pdata.map(
                                                (value, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.patientId}</th>
                                                            <th> {value.name}</th>
                                                            <th>{value.age}</th>
                                                            <th>{value.gender}</th>
                                                            <th>{value.bloodGroup}</th>
                                                            <th>{value.doctor}</th>
                                                            <th>{value.disease}</th>
                                                            <th>{value.roomNo}</th>
                                                            <th>{value.admissionDate}</th>
                                                            <th>{value.mobile}</th>
                                                        </tr>
                                                    )
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewPatients