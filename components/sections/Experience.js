import styles from '../../styles/Experience.module.scss';
import Titles from '../Titles'
import Image from 'next/image';

function Experience() {

    const experiences = [
        {
            yearStart: 2022,
            yearEnd: null,
            title: "Mediaschool Nice",
            organization: "Bachelor SupdewebDev",
            description: "Actuellement étudiant pour devenir développeur Full-stack après mon Bachelor.",
            type: "study" // study / job
        },
        {
            yearStart: 2014,
            yearEnd: 2017,
            title: "Hôtellerie restauration",
            organization: "option cuisine",
            description: "Diplômé en restauration en 2017 à Draguignan dans la spécialisation cuisinier.",
            type: "study" // study / job
        },
        
        {
            yearStart: 2021,
            yearEnd: 2022,
            title: "Chef de cuisine",
            organization: "Restaurant au 13 à Draguignan",
            description: "Planification et création de menus : Capacité à planifier et à créer des menus innovants en utilisant des ingrédients de saison, en s'assurant que les plats sont bien équilibrés et présentés de manière attrayante.",
            type: "job" // study / job
        },
        {
            yearStart: "Été 2021",
            yearEnd: "Été 2022",
            title: "Chef de rang ,serveur",
            organization: "Le bistrot à Draguignan",
            description: "Gestion d'équipe : Expérience de la gestion d'une équipe de serveurs, la formation et le développement de l'équipe pour atteindre les objectifs de l'entreprise.",
            type: "job" // study / job
        },
        {
            yearStart: 2020,
            yearEnd: 2021,
            title: "Préparateur de commande",
            organization: "ID Logistique au Arcs sur Argens",
            description: "Connaissance des processus de préparation de commande : Expérience de la préparation de commande dans un environnement d'entrepôt, y compris la connaissance des techniques de cueillette, de tri et de conditionnement des produits pour garantir une expédition ou un stockage efficace",
            type: "job" // study / job
        },
        
    ]

    return (
        <div id="experiences" className='container mt-section'>
            <Titles value="Expériences" />
            <div className="row mt-5">
                <div className="col-md-6 ">
                    <div className='rounded-4 ps-4 pe-5 py-4 bg-white shadow'>
                        <div className='border-start border-danger'>
                            <div className='d-flex flex-column gap-5'>
                                {experiences.slice(0, experiences.length / 2).map((experience, i) =>
                                    <Competence key={i} experience={experience} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='rounded-4 ps-4 pe-5 py-4 bg-white shadow mt-4 mt-md-0'>
                    <div className='border-start border-danger'>
                        <div className='d-flex flex-column gap-5'>
                            {experiences.slice(experiences.length / 2, experiences.length).map((experience, i) =>
                                <Competence key={i} experience={experience} />
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Competence({ experience }) {
    return (
        <div className={`ps-5 position-relative ${styles.competence}`}>
            {experience.type === "study" ? <span className={styles.studyIcon}>
                <i className={`${styles.icon} text-danger bi bi-mortarboard`}></i>
            </span> : ""}

            <small className='text-muted d-block'>{experience.yearStart} - {experience.yearEnd === null ? "Present" : experience.yearEnd}</small>
            <h3 className='mt-2 fs-5 d-inline-block'>{experience.title}</h3> - <small>{experience.organization}</small>
            <p className='m-0'>{experience.description}</p>
        </div>
    )
}

export default Experience;
