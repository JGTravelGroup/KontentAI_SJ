import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Excursion } from './excursion';
import { type Hotel } from './hotel';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Tour
 * Id: 89fd6a96-af63-4835-876b-e02977c676ee
 * Codename: tour
 */
export type Tour = IContentItem<{
  /**
   * Description (text)
   * Required: false
   * Id: 15d4c1ef-6ed2-4644-898e-69bf85f4ccae
   * Codename: description
   */
  description: Elements.TextElement;

  /**
   * Duration in days (number)
   * Required: false
   * Id: 23970e05-7716-4c48-b065-53f15013bbf2
   * Codename: duration_in_days
   */
  durationInDays: Elements.NumberElement;

  /**
   * End date (date_time)
   * Required: false
   * Id: bf3f80a9-18f7-447f-bcb7-f279009ca869
   * Codename: end_date
   */
  endDate: Elements.DateTimeElement;

  /**
   * Accomodation(s) (modular_content)
   * Required: false
   * Id: 62a21c58-78ae-452c-9fb3-f5435ae4f091
   * Codename: hotel
   */
  hotel: Elements.LinkedItemsElement<Hotel>;

  /**
   * Image(s) (asset)
   * Required: false
   * Id: 9b61ee67-5434-4fa9-bea4-b5db5e4c4a9c
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Included Excursion(s) (modular_content)
   * Required: false
   * Id: cf7257f4-8925-4875-b33a-38278d02f2be
   * Codename: included_excursions
   */
  includedExcursions: Elements.LinkedItemsElement<Excursion>;

  /**
   * Includes (text)
   * Required: false
   * Id: e3b4b357-a051-4ca3-a367-db69ea5b02ab
   * Codename: includes
   */
  includes: Elements.TextElement;

  /**
   * Name (text)
   * Required: false
   * Id: fa26cd34-0f57-4756-bd02-9f5678ff41c0
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * Optional Excursion(s) (modular_content)
   * Required: false
   * Id: fe67d8ad-2b4b-4cc4-afbc-f7dadb4b170a
   * Codename: optional_excursions
   */
  optionalExcursions: Elements.LinkedItemsElement<Excursion>;

  /**
   * Price in £ (number)
   * Required: false
   * Id: ac00a781-c9a3-4fa5-a61d-3458134b2fe2
   * Codename: price
   */
  price: Elements.NumberElement;

  /**
   * Start date (date_time)
   * Required: false
   * Id: a7d6fe72-8c0c-4c75-b8ae-5cbe91ee40e4
   * Codename: start_date
   */
  startDate: Elements.DateTimeElement;

  /**
   * Tour number (text)
   * Required: false
   * Id: 46a2112b-c00d-42a6-9ea3-c488051a84a1
   * Codename: tour_number
   */
  tourNumber: Elements.TextElement;
}>;
