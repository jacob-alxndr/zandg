import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";
import CardListFields from "operations/fragments/cardList";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
import GlobalDrawerFields from "operations/fragments/drawer";
const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
      ... on CardListRecord {
        ...CardListFields
      }  
  
    }
    hero {
      ...HeroFields
    }
  }
  globalNavigation {
    ${GlobalNavigationFields}
  }
  globalDrawer {
    ${GlobalDrawerFields}
  }

}
${HeroFields}
${DemoSectionFields}
${CardListFields}
`;

export default GET_HOME;
