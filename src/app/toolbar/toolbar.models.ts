import { SearchableEntities } from '../dto';

export interface ToolbarState {
    isShowSearchResults: boolean;
    isLoadingSearchResults: boolean;
    entities: SearchableEntities;
}
