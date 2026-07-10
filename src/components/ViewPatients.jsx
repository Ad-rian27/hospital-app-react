import React from 'react'

const ViewPatients = () => {
    return (
        <div>

            <div className="container">
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
                                                <th>Room</th>
                                                <th>Mobile</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>PT101</th>
                                                <th> Arun Kumar</th>
                                                <th>34</th>
                                                <th>Male</th>
                                                <th> O +</th>
                                                <th> Dr . Meera</th>
                                                <th> A101</th>
                                                <th>9876543210</th>
                                            </tr>
                                            <tr>
                                                <th> PT102</th>
                                                <th>Anjali Nair</th>
                                                <th>27</th>
                                                <th>Female</th>
                                                <th>A +</th>
                                                <th> Dr . Joseph</th>
                                                <th> A102</th>
                                                <th>9876543211</th>
                                            </tr>
                                            <tr>
                                                <th> PT103</th>
                                                <th>Rahul Das </th>
                                                <th>41</th>
                                                <th>Male </th>
                                                <th> B +</th>
                                                <th>Dr . Suresh</th>
                                                <th>B201</th>
                                                <th>9876543212</th>
                                            </tr>
                                            <tr>
                                                <th>PT104</th>
                                                <th> Sneha Roy </th>
                                                <th>30</th>
                                                <th>Female</th>
                                                <th> AB +</th>
                                                <th>Dr . Meera</th>
                                                <th>B202</th>
                                                <th>9876543213</th>
                                            </tr>
                                            <tr>
                                                <th>PT105</th>
                                                <th> Vishnu Prasad</th>
                                                <th>52</th>
                                                <th>Male</th>
                                                <th>O -</th>
                                                <th>Dr . Anand</th>
                                                <th>C301</th>
                                                <th>9876543214</th>
                                            </tr>
                                            <tr>
                                                <th>PT106</th>
                                                <th>Keerthana S</th>
                                                <th>24</th>
                                                <th>Female</th>
                                                <th>A -</th>
                                                <th> Dr . Joseph</th>
                                                <th>C302</th>
                                                <th>9876543215</th>
                                            </tr>
                                            <tr>
                                                <th>PT107</th>
                                                <th>Nikhil Menon</th>
                                                <th>38</th>
                                                <th>Male</th>
                                                <th>B -</th>
                                                <th>Dr . Anand</th>
                                                <th>D401</th>
                                                <th>9876543216</th>
                                            </tr>
                                            <tr>
                                                <th>PT108</th>
                                                <th> Priya Thomas</th>
                                                <th>46</th>
                                                <th>Female</th>
                                                <th>O +</th>
                                                <th>Dr . Suresh </th>
                                                <th>D402</th>
                                                <th>9876543217</th>
                                            </tr>
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