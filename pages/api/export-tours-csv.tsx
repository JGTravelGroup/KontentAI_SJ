// pages/api/export-to-csv.js
import { Parser } from 'json2csv';
import { getTourExportByCodename } from '../../lib/services/kontentClient';
import { defaultEnvId, defaultPreviewKey } from '../../lib/utils/env';
import { ExportModule, TourAndante, TourBrightwater } from '../../models';
import { formatDate, formatMonthsForLocale } from '../../lib/utils/dateTime';

export default async function handler(req, res) {
  // Function to fetch content items and linked items from your CMS
  const tourCodename = req.query.codename;
  if (typeof tourCodename !== "string") {
    return res.status(400).json({ error: "You have to provide 'codename' query parameter with the tour's codename." });
  }
  const currentEnvId = defaultEnvId;
  const currentPreviewApiKey = defaultPreviewKey;
  // This should return an array of content items with linked items
  // For example:
  const toursExport = await getTourExportByCodename({ envId: currentEnvId, previewApiKey: currentPreviewApiKey }, tourCodename, true) as ExportModule;

  const contentItems = []
  toursExport.elements.toursToExport.linkedItems.map((tour) => {
    return contentItems.push(tour.system.type === 'tour_brightwater' ? fetchContentItemsBrightware(tour as TourBrightwater) : fetchContentItemsAndante(tour as TourAndante));
  }
  )

  // Define the fields for the CSV file
  const fieldsAndante = [
    {
      label: 'Tour Title',
      value: 'tourTitle'
    },
    {
      label: 'Tour Subheading',
      value: 'tourSubheading'
    },
    {
      label: 'Tour Intro',
      value: 'tourIntro'
    },
    {
      label: 'Tour Summary',
      value: 'tourSummary'
    },
    {
      label: 'Tour Highlights',
      value: 'tourHighlights'
    },
    {
      label: 'Tour Itinerary',
      value: 'tourItinerary'
    },
    {
      label: 'Tour Extra Info',
      value: 'tourExtraInfo'
    },
    {
      label: 'Whats Included',
      value: 'whatsIncluded'
    },
    {
      label: 'Guest Quotes',
      value: 'guestQuotes'
    },
    {
      label: 'Tour Manager Box',
      value: 'tourManagerBox'
    },
    {
      label: 'Images',
      value: 'images'
    }
  ];

  // Define the fields for the CSV file
  const fieldsBrightwater = [
    {
      label: 'Tour Title',
      value: 'tourTitle'
    },
    {
      label: 'Tour Intro',
      value: 'tourIntro'
    },
    {
      label: 'Tour Highlights',
      value: 'tourHighlights'
    },
    {
      label: 'Tour Itinerary',
      value: 'tourItinerary'
    },
    {
      label: 'Tour Extra Info',
      value: 'tourExtraInfo'
    },
    {
      label: 'Whats Included',
      value: 'whatsIncluded'
    },
    {
      label: 'Guest Quotes',
      value: 'guestQuotes'
    },
    {
      label: 'Tour Manager Box',
      value: 'tourManagerBox'
    },
    {
      label: 'Images',
      value: 'images'
    }
  ];

  try {
    // Create a new parser instance with the fields
    const parser = new Parser({
      fields: toursExport.elements.toursToExport.linkedItems[0].system.type === 'tour_brightwater' ? fieldsBrightwater : fieldsAndante
    });
    // Convert data to CSV
    const csv = parser.parse(contentItems);

    // Set the headers to prompt download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${getCurrentDate()}-${tourCodename}.csv`);

    // Send the CSV file
    res.status(200).send(csv);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to generate multiple-tours CSV file' });
  }
}

export function getCurrentDate(separator = '') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

// Mock function to simulate fetching content items from a CMS
// Replace this with your actual data fetching logic
function fetchContentItemsBrightware(tour: TourBrightwater) {
  return {
    tourTitle: tour.elements.tourTitle?.value,
    tourIntro: tour.elements.tourIntro?.value,
    tourHighlights: tour.elements.tourHighlights?.value,
    tourItinerary: tour.elements.tourItinerary?.value,
    tourExtraInfo: tour.elements.tourExtraInfo?.value,
    whatsIncluded: tour.elements.whatSIncluded?.value,
    guestQuotes: tour.elements.guestQuotes?.value,
    tourManagerBox: tour.elements.guides?.value,
    images: tour.elements.images?.value.map((image) => image.url).join(';'),
  }
}

function fetchContentItemsAndante(tour: TourAndante) {
  return {
    tourTitle: tour.elements.tourTitle?.value,
    tourSubheading: tour.elements.tourSubheading?.value,
    tourIntro: tour.elements.tourIntro?.value,
    tourSummary: tour.elements.tourSummary?.value,
    tourHighlights: tour.elements.tourHighlights?.value,
    tourItinerary: tour.elements.tourItinerary?.value,
    tourExtraInfo: tour.elements.tourExtraInfo?.value,
    whatsIncluded: tour.elements.whatSIncluded?.value,
    guestQuotes: tour.elements.guestQuotes?.value,
    tourManagerBox: tour.elements.guides?.value,
    images: tour.elements.images?.value.map((image) => image.url).join(';')
  }
}