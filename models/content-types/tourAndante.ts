import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Tour - Andante
 * Id: 720bd8ff-46b6-47cd-b42a-fb7b225516c4
 * Codename: tour___andante
 */
export type TourAndante = IContentItem<{
    /**
     * Guest Quotes (rich_text)
     * Required: false
     * Id: 6b6ac89c-68b2-4e74-a78c-865546049684
     * Codename: guest_quotes
     */
    guestQuotes: Elements.RichTextElement;

    /**
     * Guides (rich_text)
     * Required: false
     * Id: c6a245bd-ef9c-4ed8-93a0-3060828469d0
     * Codename: guides
     */
    guides: Elements.RichTextElement;

    /**
     * Images (asset)
     * Required: false
     * Id: 7dcb115e-a95f-4844-91c5-0b992619fc6d
     * Codename: images
     */
    images: Elements.AssetsElement;

    /**
     * Tour Code (rich_text)
     * Required: true
     * Id: c7532c54-21de-4b68-90fd-afed0457838c
     * Codename: tour_code
     */
    tourCode: Elements.RichTextElement;

    /**
     * Tour duration in days (number)
     * Required: true
     * Id: 206560cc-993f-43de-b5b6-ccdca9476d48
     * Codename: tour_duration_in_days
     */
    tourDurationInDays: Elements.NumberElement;

    /**
     * Tour Extra Info (rich_text)
     * Required: false
     * Id: 00ad3df8-0788-442f-b249-f86350d57886
     * Codename: tour_extra_info
     */
    tourExtraInfo: Elements.RichTextElement;

    /**
     * Tour Highlights (rich_text)
     * Required: true
     * Id: ee815359-e234-4c6f-b87c-1d5e62b1e962
     * Codename: tour_highlights
     */
    tourHighlights: Elements.RichTextElement;

    /**
     * Tour Intro (rich_text)
     * Required: false
     * Id: 643d4a87-b375-4044-ab0c-156dd73fcb91
     * Codename: tour_intro
     */
    tourIntro: Elements.RichTextElement;

    /**
     * Tour Itinerary (rich_text)
     * Required: true
     * Id: 93b7298c-4640-4260-a94a-177b756c991a
     * Codename: tour_itinerary
     */
    tourItinerary: Elements.RichTextElement;

    /**
     * Tour Subheading (rich_text)
     * Required: false
     * Id: 2b657678-8242-4570-810b-750416094954
     * Codename: tour_subheading
     */
    tourSubheading: Elements.RichTextElement;

    /**
     * Tour Summary (rich_text)
     * Required: false
     * Id: 3f18ba6a-db7a-4770-a6f3-0bda104d0661
     * Codename: tour_summary
     */
    tourSummary: Elements.RichTextElement;

    /**
     * Tour Title (rich_text)
     * Required: true
     * Id: 2d1af372-8a3f-4e7b-ade1-8e822f3e33d1
     * Codename: tour_title
     */
    tourTitle: Elements.RichTextElement;

    /**
     * Export (custom)
     * Required: false
     * Id: 06a35080-26d6-4c3d-9dd1-d101d5a22caa
     * Codename: untitled_custom_element
     */
    untitledCustomElement: Elements.CustomElement;

    /**
     * What's Included (rich_text)
     * Required: false
     * Id: 1cf08bb9-15cc-4577-b5b5-43cfe187ed8f
     * Codename: what_s_included
     */
    whatSIncluded: Elements.RichTextElement;
}>;