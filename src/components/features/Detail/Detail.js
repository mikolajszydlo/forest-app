import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const Detail = ({teamNo, index}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      TransitionProps={{ unmountOnExit: true }}
      expanded={expanded === '' + teamNo + index}
      onChange={handleChange('' + teamNo + index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ color: 'text.secondary' }}>Norrköping</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Client: Client name</Typography>
        <Typography>Details: Task details</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

Detail.propTypes = {
  teamNo: PropTypes.number,
  index: PropTypes.number,
};

export default Detail;
