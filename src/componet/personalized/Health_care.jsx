import React, { useState } from 'react'
import './Health_care.css'
import { Healt_api } from './Healt_api'
function Health_care(props) {
    const [search, setsearch] = useState('');
    console.log(Healt_api)
   
    return (
        <div>
            <h1 className="mt-4 my-4 text-center text-green">Health Care Center</h1>
            <div className="container container_care my-4 mt-4" >
                <form action="/predict" method="post">
                    <div className="htmlForm-group">


                        <div className="mb-3">
                            <label htmlFor="symptoms" className="form-label">Select Symptoms:</label>

                            <input type="text" onChange={(e) => setsearch(e.target.value)} className="form-control" id="symptoms" placeholder="type systems such as itching, sleeping, aching etc" />
                        </div>

                        <br />
                        <button type="button" id="startSpeechRecognition" className="btn btn-primary">
                            Start Speech Recognition
                        </button>


                        <table className="table my-2">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Disease</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Medications</th>
                                    <th scope="col">Workouts</th>
                                    <th scope="col">Diets</th>
                                </tr>
                            </thead>
                            <tbody >
                                {Healt_api
                                    .filter((item) => {
                                        return search.toLowerCase() === ''
                                            ? item
                                            : item.Disease.toLowerCase().includes(search);
                                    })
                                    .map((item) => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.Disease}</td>
                                            <td>{item.Description}</td>
                                            <td>{item.Precaution}</td>
                                            <td>{item.Workouts}</td>
                                            <td>{item.Diets}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                    </div>
                    <br />


                </form>
            </div>


            <h2 className="text-center my-4 mt-4">Put Your Health , Lifestyle And Genetic Information Data</h2>
            <div className="container_care">

                <div className="result-container">

                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#diseaseModal" >Disease</button>
                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#descriptionModal" >Description</button>
                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#precautionModal" >Precaution</button>
                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#medicationsModal" >Medications</button>
                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#workoutsModal" >Workouts</button>
                    <button className="toggle-button" data-bs-toggle="modal" data-bs-target="#dietsModal" >Diets</button>
                </div>
            </div>

            <div className="modal fade" id="diseaseModal" tabIndex="-1" aria-labelledby="diseaseModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title" id="diseaseModalLabel">Predicted Disease</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>gfghjklkjhgfdsdhjkytrewasdfghjklkyt</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="descriptionModal" tabIndex="-1" aria-labelledby="descriptionModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title" id="descriptionModalLabel">Description</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>0987654ertyuioiuytredghjkjhgsdfghjklkjhgfd</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="precautionModal" tabIndex="-1" aria-labelledby="precautionModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title" id="precautionModalLabel">Precaution</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>





            <div className="modal fade" id="medicationsModal" tabIndex="-1" aria-labelledby="medicationsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="medicationsModalLabel">Medications</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                mhfjhvfhtdmtgxgnadszxcvbnkjhgfdsxcvbnm,xz
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="workoutsModal" tabIndex="-1" aria-labelledby="workoutsModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title" id="workoutsModalLabel">Workouts</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                kjhgfdkjhgfrtyhn cdtyjnbvcsxcvbnjuy
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="dietsModal" tabIndex="-1" aria-labelledby="dietsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="dietsModalLabel">Diets</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                jhgfdsxcvbnm,kjhgsazxcvbnm,lkuytreszxcvbnmkytresz
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Health_care
