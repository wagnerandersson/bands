import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { db } from "../conectafb";

const Detalhes = () => {
    const { id } = useParams();

    const [show, setShow] = useState({});
    const [aviso, setAviso] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const getShow = async (id) => {
        const doc = await db.collection("shows").doc(id).get();

        if (doc.exists) {
            setShow({ id: doc.id, ...doc.data() });
        } else {
            console.log("Erro...")
        }
    }
};

useEffect(() => {
    getShow(id);
}, [id]);

const avalicao = (data, e) => {
    try {
        db.collection("shows").doc(id).collection("avaliacoes").add(data);
        setAviso("Sua avaliação foi cadastrada com sucesso!");
    } catch (erro) {
        setAviso("Erro: " + erro);
    }
    tempoAviso();
    e.target.reset();
};

const tempoAviso = () => {
    setTimeout(() => {
        setAviso("");
    }, 5000);
};

return (
    <div className="container">
        <div className="row">
            <div className="col-sm6 mt-2">
                <div className="card">

                </div>
            </div>
        </div>
    </div>
);


export default Detalhes;