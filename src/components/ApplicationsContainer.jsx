import React, { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import ApplicationsTable from './ApplicationsTable.jsx';
import AddApplicationForm from './AddApplicationForm.jsx';

//This container holds all state bc dashboard and form need to share this state

function ApplicationsContainer() {
  const [fetched, setFetched] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("/app/1")
    .then((res) => res.json())
    .then((data) => console.log('DATA FROM FETCH: ', data))
    .then((data) => {
      setResponse(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [fetched]);

	return (
		<div>
			<Container
				centerContent
				m={2}
				maxW='1480px'
				mx='auto'
				border='1px'
				borderRadius='lg'
				borderColor='gray.200'
			>
				<h1>Job Application Dashboard</h1>
				<ApplicationsTable fetched={fetched} setFetched={setFetched} />
			</Container>
        <AddApplicationForm fetched={fetched} setFetched={setFetched} />
		</div>
	);
}

export default ApplicationsContainer;
