import { useState } from 'react'
import TextField from '../TextField'
import './Form.css'
import jsPDF from 'jspdf'

const Form = () => {

    const [formData, setFormData] = useState({
        "Nome do Veículo": '',
        "Placa": '',
        "Data De Chegada": '',
        "Data De Saída": '',
        "Hora De Chegada": '',
        "Hora De Saída": '',
        "Tanque Na Chegada": '',
        "Tanque Na Saída": '',
        "Km Na Chegada": '',
        "Km Na Saída": '',
        "Itinerario": '',
        "Condutor": '',
        "Assinatura Do Condutor": ""
    })

    const handleInputChange = (e) => {
        setFormData((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))

    }

    const generatePDF = (e) => {
        e.preventDefault()

        const doc = new jsPDF();
        let y = 10;

        Object.entries(formData).forEach(([key, value]) => {
            doc.text(`${key}: ${value}`, 10, y);
            y += 10;
        });

        doc.save('MIV.pdf');

    }

    return(
        <section>
            <form onSubmit={(e) => generatePDF(e)}>
                <TextField required={true} name="Nome do Veículo" label="Veículo" placeholder="Digite o nome do veículo" handleChange={handleInputChange}  value={formData.nome}/>

                <TextField required={true} name="Placa" label="Placa" placeholder="Digite a placa do veículo" handleChange={handleInputChange} value={formData.placa}/>

                <TextField required={true} name="Data De Chegada" label="Data de chegada" placeholder="Digite a data de chegada" handleChange={handleInputChange} value={formData.DataDeChegada}/> 

                <TextField required={true} name="Data De Saída" label="Data de saída" placeholder="Digite a data de saída" handleChange={handleInputChange} value={formData.DataDeSaída}/>

                <TextField required={true} name="Hora De Chegada" label="Hora de chegada" placeholder="Digite a hora da chegada" handleChange={handleInputChange} value={formData.HoraDeChegada}/>

                <TextField required={true} name="Hora De Saída" label="Hora de saída" placeholder="Digite a hora de saída" handleChange={handleInputChange} value={formData.HoraDeSaída}/>

                <TextField required={true} name="Tanque Na Chegada" label="Tanque na hora de chegada" placeholder="Digite o tanque na hora de chegada" handleChange={handleInputChange}value={formData.TanqueNaChegada}/>

                <TextField required={true} name="Tanque Na Saída" label="Tanque na hora de saída" placeholder="Digite o tanque na hora de saída" handleChange={handleInputChange} value={formData.TanqueNaSaída}/>

                <TextField required={true} name="Km Na Chegada" label="KM chegada" placeholder="Digite o KM na chegada" handleChange={handleInputChange} value={formData.KmNaChegada}/>

                <TextField required={true} name="Km Na Saída" label="KM saída" placeholder="Digite o KM na saída" handleChange={handleInputChange} value={formData.KmNaSaída}/>

                <TextField required={true} name="Itinerario" label="Itinerário" placeholder="Digite o intinerário" handleChange={handleInputChange} value={formData.Itinerario}/>

                <TextField required={true} name="Condutor" label="Condutor" placeholder="Digite o nome do condutor" handleChange={handleInputChange} value={formData.Condutor}/>

                <TextField required={false} name="Assinatura Do Condutor" label="Assinatura do contudor" placeholder="Assine aqui" handleChange={handleInputChange} value={formData.AssinaturaCondutor}/>

                <button>Gerar PDF</button>

            </form>
            
        </section>
    )
}

export default Form