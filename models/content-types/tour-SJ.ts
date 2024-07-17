import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Excursion } from './excursion';
import { type Hotel } from './hotel';

/**
 * Generated by '@kontent-ai/model-generator@6.5.1'
 *
 * Tour
 * Id: 6a42abf2-4651-4cbb-bf59-e0995d442de8
 * Codename: tour
 */
export type Tour = IContentItem<{
    /**
     * Export Tour (custom)
     * Required: false
     * Id: 187c79ff-8347-4ce8-950a-ca3b5facb689
     * Codename: export_tour
     */
    exportTour: Elements.CustomElement;

    /**
     * Hotel(s) (modular_content)
     * Required: false
     * Id: 3d8c6dac-c711-40ef-82ff-33fe75dbb29e
     * Codename: hotel_s_
     */
    hotelS: Elements.LinkedItemsElement<Hotel>;

    /**
     * Images (asset)
     * Required: false
     * Id: 37720700-dc2e-4070-a64d-d15b2c296f12
     * Codename: images
     */
    images: Elements.AssetsElement;

    /**
     * Included Excursions (modular_content)
     * Required: false
     * Id: 787ed248-53e8-4d0f-9f2d-1d02cfd7cd10
     * Codename: included_excursions
     */
    includedExcursions: Elements.LinkedItemsElement<Excursion>;

    /**
     * Optional Excursion(s) (modular_content)
     * Required: false
     * Id: a21d8782-931a-4305-a104-f4a9a9d6c5a5
     * Codename: optional_excursion_s_
     */
    optionalExcursionS: Elements.LinkedItemsElement<Excursion>;

    /**
     * Reader offer intro 2 (rich_text)
     * Required: true
     * Id: 848905b4-2630-41d3-9a76-d13de12e3520
     * Codename: reader_offer_intro_2
     */
    readerOfferIntro2: Elements.RichTextElement;

    /**
     * Reader offer intro 3 (rich_text)
     * Required: true
     * Id: d9d28a30-2607-46fa-aaad-ab30cf09e667
     * Codename: reader_offer_intro_3
     */
    readerOfferIntro3: Elements.RichTextElement;

    /**
     * Tour type (multiple_choice) 
     * Codename: tour_type
     */
    tourType: Elements.MultipleChoiceElement;

    /**
     * Tour Intro (rich_text)
     * Required: true
     * Id: 6623fbb4-aec7-4cd6-88a6-bcbee95b151e
     * Codename: tour_intro
     */
    tourIntro: Elements.RichTextElement;

    /**
     * Tour duration in days (number)
     * Required: false
     * Id: 75d9d13f-0103-46ac-b644-bb044bcc57f6
     * Codename: tour_duration_in_days
     */
    tourDurationInDays: Elements.NumberElement; 

    /**
     * Tour Title (text)
     * Required: true
     * Id: 876d8a43-5c12-4c3a-a09d-79b0487862ee
     * Codename: tour_title
     */
    tourTitle: Elements.TextElement;

    /**
     * What's Included (rich_text)
     * Required: true
     * Id: a1a40563-6186-4f52-834b-e09a0344ef51
     * Codename: untitled_rich_text
     */
    untitledRichText: Elements.RichTextElement;
}>;