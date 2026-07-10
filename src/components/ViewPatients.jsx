import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewPatients = () => {

    const [pdata, changeData] = useState(

        [
            {
                "patientId": "PT101",
                "name": "Arun Kumar",
                "age": 34,
                "gender": "Male",
                "bloodGroup": "O+",
                "doctor": "Dr. Meera Nair",
                "disease": "Viral Fever",
                "roomNo": "A101",
                "admissionDate": "2026-07-01",
                "mobile": "9876543210"
            },
            {
                "patientId": "PT102",
                "name": "Anjali Nair",
                "age": 28,
                "gender": "Female",
                "bloodGroup": "A+",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Migraine",
                "roomNo": "A102",
                "admissionDate": "2026-07-02",
                "mobile": "9876543211"
            },
            {
                "patientId": "PT103",
                "name": "Rahul Das",
                "age": 45,
                "gender": "Male",
                "bloodGroup": "B+",
                "doctor": "Dr. Suresh Kumar",
                "disease": "Diabetes",
                "roomNo": "B201",
                "admissionDate": "2026-07-03",
                "mobile": "9876543212"
            },
            {
                "patientId": "PT104",
                "name": "Sneha Roy",
                "age": 31,
                "gender": "Female",
                "bloodGroup": "AB+",
                "doctor": "Dr. Meera Nair",
                "disease": "Asthma",
                "roomNo": "B202",
                "admissionDate": "2026-07-03",
                "mobile": "9876543213"
            },
            {
                "patientId": "PT105",
                "name": "Vishnu Prasad",
                "age": 53,
                "gender": "Male",
                "bloodGroup": "O-",
                "doctor": "Dr. Anand Krishnan",
                "disease": "Hypertension",
                "roomNo": "C301",
                "admissionDate": "2026-07-04",
                "mobile": "9876543214"
            },
            {
                "patientId": "PT106",
                "name": "Keerthana S",
                "age": 24,
                "gender": "Female",
                "bloodGroup": "A-",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Food Poisoning",
                "roomNo": "C302",
                "admissionDate": "2026-07-05",
                "mobile": "9876543215"
            },
            {
                "patientId": "PT107",
                "name": "Nikhil Menon",
                "age": 39,
                "gender": "Male",
                "bloodGroup": "B-",
                "doctor": "Dr. Anand Krishnan",
                "disease": "Fracture",
                "roomNo": "D401",
                "admissionDate": "2026-07-06",
                "mobile": "9876543216"
            },
            {
                "patientId": "PT108",
                "name": "Priya Thomas",
                "age": 47,
                "gender": "Female",
                "bloodGroup": "O+",
                "doctor": "Dr. Suresh Kumar",
                "disease": "Pneumonia",
                "roomNo": "D402",
                "admissionDate": "2026-07-06",
                "mobile": "9876543217"
            },
            {
                "patientId": "PT109",
                "name": "Akhil Raj",
                "age": 36,
                "gender": "Male",
                "bloodGroup": "AB-",
                "doctor": "Dr. Meera Nair",
                "disease": "Kidney Stone",
                "roomNo": "E501",
                "admissionDate": "2026-07-07",
                "mobile": "9876543218"
            },
            {
                "patientId": "PT110",
                "name": "Divya Mohan",
                "age": 29,
                "gender": "Female",
                "bloodGroup": "A+",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Typhoid",
                "roomNo": "E502",
                "admissionDate": "2026-07-08",
                "mobile": "9876543219"
            }
        ]

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