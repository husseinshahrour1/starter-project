import { Button } from 'antd';
import useSpeechRecognition from './hooks/useSpeechRecognitionHook';
import { useEffect, useState } from 'react';

interface Patient {
  name: string | null;
  age: number | null | string;
  occupation: string | null;
  chief_complaint: string | null;
  medical_history: string[] | null;

  additional_notes: string | null;
}

const SpeechRecognition = () => {
  const [patientsDetails, setPatientsDetails] = useState<Patient>({
    name: '',
    age: '',
    occupation: '',
    chief_complaint: '',
    medical_history: [''],

    additional_notes: '',
  });
  const { text, isListening, stopListening, startListening, hasRecognitionSupport } =
    useSpeechRecognition();

  const patients = [
    {
      name: 'John Anderson',
      age: 45,
      occupation: 'Software Engineer',
      chief_complaint: 'Persistent lower back pain',
      medical_history: ['Hypertension', 'Occasional migraines'],
      lifestyle: { activity: 'Sedentary', alcohol_consumption: 'Moderate' },
      additional_notes: 'Requests non-pharmacological pain management strategies.',
    },
    {
      name: 'Emily Martinez',
      age: 32,
      occupation: 'Elementary School Teacher',
      chief_complaint: 'Recurrent sore throat and fatigue',
      medical_history: ['Allergic rhinitis'],
      lifestyle: { exercise: 'Regular', smoker: false, alcohol_consumption: 'Occasional' },
      additional_notes: 'Interested in exploring natural remedies for throat discomfort.',
    },
    {
      name: 'Robert Turner',
      age: 60,
      occupation: 'Retired Police Officer',
      chief_complaint: 'Difficulty sleeping and increased anxiety',
      medical_history: ['Hypertension', 'Mild osteoarthritis'],
      lifestyle: { activity: 'Limited', smoker: 'Former', caffeine_intake: 'Moderate' },
      additional_notes: 'Concerned about the potential side effects of sleep medications.',
    },
    {
      name: 'Sophie Nguyen',
      age: 28,
      occupation: 'Graphic Designer',
      chief_complaint: 'Seasonal allergies and persistent skin rash',
      medical_history: ['Eczema'],
      lifestyle: { exercise: 'Regular', smoker: false, diet: 'Vegetarian' },
      additional_notes: 'Prefers holistic approaches and natural skincare products.',
    },
    {
      name: 'Carlos Ramirez',
      age: 50,
      occupation: 'Construction Worker',
      chief_complaint: 'Chronic knee pain',
      medical_history: ['Type 2 diabetes'],
      lifestyle: { job_activity: 'Physically demanding', alcohol_consumption: 'Occasional' },
      additional_notes: 'Interested in exploring physical therapy for pain management.',
    },
  ];
  useEffect(() => {
    const selectedPatientDetails = patients.find(
      (patient: Patient) => patient.name === text.replace('.', ''),
    );
    if (selectedPatientDetails) setPatientsDetails(selectedPatientDetails);
  }, [text]);

  // Example usage

  return (
    <div className='d-flex justify-content-between align-items-start'>
      {hasRecognitionSupport ? (
        <div>
          <div className='d-flex'>
            <Button
              disabled={isListening}
              style={{ marginRight: '10px' }}
              type='primary'
              onClick={startListening}
            >
              Start Recording
            </Button>

            <Button disabled={!isListening} type='primary' onClick={stopListening}>
              Stop Recording
            </Button>
          </div>
          <br />
          {isListening ? <div>Listining...</div> : null}
          {text}
        </div>
      ) : (
        <h1>Your browser has no speech rec</h1>
      )}
      <div>
        <div>
          <b>Name: </b> {patientsDetails?.name ?? 's'}
        </div>
        <div>
          <b>Age: </b>
          {patientsDetails?.age}
        </div>
        <div>
          <b>Occupation: </b>
          {patientsDetails?.occupation}
        </div>
        <div>
          <b>Chief Complaint: </b>
          {patientsDetails?.chief_complaint}
        </div>
        <div>
          <b>Additional Notes </b>
          {patientsDetails?.additional_notes}
        </div>
      </div>
    </div>
  );
};

export default SpeechRecognition;
