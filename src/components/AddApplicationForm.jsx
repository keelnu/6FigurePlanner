import React, {useState} from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  DrawerCloseButton,
} from '@chakra-ui/react';

function AddApplicationForm(props) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();

  // state management for each form value
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyNumber, setCompanyNumber] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [interviewStatus, setInterviewStatus] = useState('');
  const [offerReceived, setOfferReceived] = useState('');
  const [doubleDown, setDoubleDown] = useState('');

  // Event listeners for form values below
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleCompanyEmail = (e) => {
    setCompanyEmail(e.target.value);
  };

  const handleCompanyNumber = (e) => {
    setCompanyNumber(e.target.value);
  };
  const handleDateApplied = (e) => {
    setDateApplied(e.target.value);
  };
  const handleInterviewStatus = (e) => {
    setInterviewStatus(e.target.value);
  };
  const handleOfferReceived = (e) => {
    setOfferReceived(e.target.value);
  };
  const handleDoubleDown = (e) => {
    setDoubleDown(e.target.value);
  };

  const submitData = (e) => {
    fetch('/app', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'company': company,
        'position': position,
        'applied_on': dateApplied,
        'company_email': companyEmail,
        'company_number': companyNumber,
        'double_down': doubleDown,
        'interview_status': interviewStatus,
        'offer_received': offerReceived,
        'id': 1
      })
      .then((data) => {
        console.log('submitData POST data: ', data);
        console.log('Saved to DB!');
      })
    });
    props.setFetched(!props.fetched);
    e.preventDefault();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Add Application
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add New Application</DrawerHeader>

            <DrawerBody>
              {/* CREATE FORM INPUTS INSIDE HERE */}
              {/* <form id="my-form" onSubmit={submitData}> */}
              <FormControl isRequired id='my-form' onSubmit={submitData}>
                <FormLabel>Company</FormLabel>
                <Input
                  id='input_1'
                  name="company"
                  placeholder="Company"
                  value={company}
                  onChange={handleCompany}
                />
                <FormLabel>Position</FormLabel>
                <Input
                  id='input_2'
                  name="position"
                  placeholder="Position"
                  value={position}
                  onChange={handlePosition}
                />
                <FormLabel>Company Email</FormLabel>
                <Input
                  id='input_3'
                  name="company_email"
                  placeholder="Company Email"
                  value={companyEmail}
                  onChange={handleCompanyEmail}
                />
                <FormLabel>Company Phone</FormLabel>
                <Input
                  id='input_4'
                  name="company_number"
                  placeholder="Company Phone"
                  value={companyNumber}
                  onChange={handleCompanyNumber}
                />
                <FormLabel>Date Applied</FormLabel>
                <Input
                  id='input_5'
                  name="date_applied"
                  placeholder="(YYYY-MM-DD)"
                  value={dateApplied}
                  onChange={handleDateApplied}
                />
                <FormLabel>Date Doubled Down</FormLabel>
                <Input
                  id='input_6'
                  name="double_down"
                  placeholder="(YYYY-MM-DD)"
                  value={doubleDown}
                  onChange={handleDoubleDown}
                />
                <Box>
                <FormLabel>Interview Status</FormLabel>
                  <Select
                    placeholder="–"
                    value={interviewStatus}
                    onChange={handleInterviewStatus}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Phone Screen">Phone Screen</option>
                    <option value="Onsite">Onsite</option>
                  </Select>
                </Box>
                <Box>
                <FormLabel>Offer Received?</FormLabel>
                  <Select
                    placeholder="–"
                    value={offerReceived}
                    onChange={handleOfferReceived}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Select>
                </Box>
              </FormControl>
              {/* </form> */}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" formcontrol="my-form" color="blue">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default AddApplicationForm;
