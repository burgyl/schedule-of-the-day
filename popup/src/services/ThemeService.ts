import { THEMES } from '../typing/enums/Themes';

export class ThemesService {

  private static LOCAL_STORAGE_KEY_THEME = 'theme';

  static setTheme(theme: THEMES): void {
    if (theme === THEMES.SYSTEM) {
      localStorage.removeItem(ThemesService.LOCAL_STORAGE_KEY_THEME)
    } else {
      localStorage.theme = theme;
    }
  }

  static isDarkTheme(): boolean {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    return localStorage.theme === 'dark' || (!(ThemesService.LOCAL_STORAGE_KEY_THEME in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
}
