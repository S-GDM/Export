import { ExportModule } from './export.module';

describe('ExportModule', () => {
  let exportModule: ExportModule;

  beforeEach(() => {
    exportModule = new ExportModule();
  });

  it('should create an instance', () => {
    expect(exportModule).toBeTruthy();
  });
});
