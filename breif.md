# Bonna’s 2.0 — Content Brief

Reference brief for a **separate Bonna’s 2.0 website project**. Do not modify or replace the existing Bonna’s website as part of this work.

## Project purpose

Create a distinctive, Bengali-inspired website that introduces the food, shows the menu and encourages visitors to order through WhatsApp.

- Brand name: **Bonna’s 2.0**
- Brand descriptor: **Original Bengali Cuisine**
- Existing website: [https://www.bonnas.co.uk](https://www.bonnas.co.uk)
- Primary conversion: **a WhatsApp enquiry**
- No online checkout or payment.
- Keep this separate project **noindex**. Do not include its URLs in the existing website’s sitemap.

## Business facts

- Home-cooked Bengali / Bangladeshi catering in East London.
- **100% halal.**
- **Pre-order only, with at least 7 days’ notice.**
- Food is cooked fresh to order.
- **Collection only — no delivery.**
- Collection area: **Roman Road, E2 0RB, East London.**
- Do not describe the collection point as Stepney Green.
- Caters for weddings, aqiqah, walima, gaye holud, milad, Eid, iftar, birthdays, family gatherings and office lunches.
- Do not imply a walk-in restaurant, dine-in service or regular opening hours.

Use “cooked fresh to order” in public copy. Avoid blanket claims about ingredients never being frozen unless the owner explicitly confirms them.

## Ordering process

The website should direct customers to WhatsApp to discuss and confirm their order.

Suggested five-step flow:

1. **Browse the menu** — choose dishes or a platter.
2. **WhatsApp us** — share your choices, quantities and preferred collection date.
3. **Confirm the details** — agree availability, price and any dietary requirements.
4. **Arrange payment** — follow the payment instructions provided through WhatsApp.
5. **Collect your food** — collect at the agreed time in E2 0RB.

Show **“Pre-order at least 7 days ahead · Collection only · E2 0RB”** near the menu and contact sections.

Do not invent deposit percentages, minimum spends, cancellation terms or accepted payment methods.

**Primary CTA:** “Order on WhatsApp”
**Menu CTA:** “Menu”

[Confirm the WhatsApp number/link before launch.]

## Menu content

These dishes have been mentioned in existing Bonna’s material. They are a starting inventory, not a confirmed current availability or price list.

Use the latest approved menu for prices, portions, spelling and availability.

### Signature dishes and rice

- **Bangladeshi-style chicken roast** — a signature dish, commonly paired with polao.
- **Polao** — aromatic basmati rice.
- **Korma** — confirm available meat options.
- **Dum biriyani** — Dhaka-style; chicken, lamb and beef variants have been mentioned. Confirm current options.
- **Tehari** — confirm meat and portion options.
- **Biya Bari platters** — wedding-style combinations; confirm dishes and serving sizes.

### Fish, vegetables and accompaniments

- Fish curries — confirm fish varieties and preparations.
- Vorta — confirm available varieties.
- Daal.
- Bhaji.

### Snacks and street food

- Chotpoti.
- Fuchka.
- Kebabs and chops — confirm varieties.
- Alur chop.
- Piyaju.
- Beguni.
- Chola / boot.

### Other previously offered dishes

Include only if still available:

- Luchi with daal / chola bhature.
- Fried rice with tandoori chicken.
- Vegetable noodles.
- Chicken spaghetti.

### Desserts and traditional sweets

- Pakon pitha.
- Milk-and-egg pudding.
- Shahi jorda.
- Nawabi shemai.
- Rice pudding — confirm whether the menu calls this firni, payesh or something else; do not assume these are interchangeable.

### Seasonal and event menus

- Ramadan / iftar platters.
- Haleem.
- Eid and special-event catering.

Confirm seasonal availability before publishing.

### Menu information still needed

- Current prices and serving sizes.
- Minimum quantities, if applicable.
- Platter contents and number of people served.
- Available meat, fish and vorta options.
- Drinks, if offered.
- Dish-specific allergens and dietary suitability.

Do not label dishes vegan, gluten-free, nut-free or allergen-free without confirmation.

Suggested enquiry copy:

**“Please tell us about any food allergies or dietary requirements before placing your order.”**

## Brand voice and tone

**Recommended direction:** warm, welcoming and rooted in Bengali home cooking, with a polished presentation.

The site should communicate:

- The comfort and familiarity of Bengali food.
- Care in preparing food for family gatherings and celebrations.
- Pride in Bengali culture.
- Clear, practical ordering information.

Use simple, friendly language. Keep familiar Bengali dish names and add short explanations where helpful.

Avoid unsupported claims such as “London’s best,” “award-winning,” “family-run,” or “generations-old recipes.”

## Visual direction

Build around the new **Bonna’s 2.0 logo** and the supplied Bengali art references.

- **Warm ivory** is the preferred background direction.
- Draw accent colours from the approved logo and artwork.
- Use Bengali folk-art details as supporting decoration.
- Let real food photography remain prominent.
- Keep typography readable and the layout comfortable on mobile.
- Use decorative lettering sparingly.
- Confirm exact colour codes and fonts during implementation.

The overall feel should be culturally expressive, warm and mature.

## Assets provided separately

- Logo: `public/bonnas2_logo.png`
- Food photography: Sanity dataset `production`
- Five supplied Bengali art references.
- Existing menu assets: four pages, previously named `menu1.png` through `menu4.png`, plus a menu PDF. Confirm the latest versions and provide them to this separate project.

Use existing food photographs as supplied. Do not generate replacement food imagery or imply that stock dishes are Bonna’s dishes.

Check artwork usage rights before publishing supplied references as site assets.

## Sanity access

Provided configuration:

```env
SANITY_PROJECT_ID=u5i02ojt
SANITY_DATASET=production
```

The dataset is described as publicly readable. Verify access and inspect the document schema before implementation.

- Query published content to obtain image asset references and associated dish details.
- Use `@sanity/image-url` to build image URLs from those references.
- Project ID and dataset alone do not identify which photographs to display.
- No write access is needed.
- Do not expose private tokens in frontend code.
- Do not change the shared dataset or existing content for this separate project.

## Suggested page structure

1. **Hero** — logo, clear food proposition, real photography and WhatsApp CTA.
2. **Business essentials** — halal, fresh to order, 2-day notice and collection only.
3. **Menu and ordering steps** — together on desktop, stacked on mobile.
4. **Signature dishes / gallery** — selected real food photos with accurate labels.
5. **Catering occasions** — family, cultural and corporate events.
6. **About Bonna’s** — concise introduction grounded in confirmed facts.
7. **Collection and contact** — E2 0RB, WhatsApp and confirmed social links.

Keep the menu accessible within the browsing experience, with clear back/close controls and swipeable pages on mobile. Use a single, consistent **“Menu”** label.

Avoid publishing an exact residential collection address or map pin unless approved.

## Design inspiration

Use these as supplied creative references, not templates to copy:

- [Dabbawal — Run For The Hills](https://runforthehills.com/projects/dabbawal)
  Reference for expressive branding, illustration and warm colour.

- [OK Please](https://okplease.co.uk)
  Reference for a compact, photography-led presentation and clearly grouped food sections.

- [Desi Dabba — Behance](https://www.behance.net/gallery/213099435/Desi-Dabba-An-Indian-Restaurants-Brand-Identity)
  Reference for identity, colour and typography.

Translate the inspiration into a specifically **Bengali** identity.

The noindex requirement is a project decision; it does not depend on the SEO approach of these reference sites.

## What NOT to claim

- No delivery.
- No same-day ordering: **at least 2 days’ notice is required.**
- No online checkout or website payment.
- No dine-in, walk-in service or invented opening hours.
- No unverified prices, availability or serving sizes.
- No unverified certifications, awards or allergen guarantees.
- No invented service areas or claims of being close to distant neighbourhoods.
- Do not present nearby places as delivery coverage.

Anchor location copy to **Roman Road / E2 0RB / East London**.

## Confirm before launch

- WhatsApp number and approved social links.
- Latest menu, prices and portions.
- Any minimum order quantities.
- Allergen information.
- Collection arrangements and address visibility.
- Approved logo version and artwork assets.
- Whether Bonna’s 2.0 will remain noindex after review.
