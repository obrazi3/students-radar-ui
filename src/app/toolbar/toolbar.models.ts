import { SearchableEntity } from '../dto';

export interface ToolbarState {
    isShowSearchResults: boolean;
    isLoadingSearchResults: boolean;
    entities: SearchableEntity[];
}
