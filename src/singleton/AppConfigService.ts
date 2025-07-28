export class AppConfigService {
  private static instance: AppConfigService;
  private config: Record<string, any> = {};

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  public static getInstance(companyName: string, footer: string) {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(companyName, footer);
    }
    return AppConfigService.instance;
  }

  set(key: string, value: any): void {
    this.config[key] = value;
  }

  get(key: string): any {
    return this.config[key];
  }
}
