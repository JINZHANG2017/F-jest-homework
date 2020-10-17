import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";


const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  const mockOfClass=jest.fn().mockImplementation(()=>{
    const returnValue={
      acceptInjection:mockAcceptInjection,
      getHasAntibodies:mockGetHasAntibodies
    };
    return returnValue;
  });
  return mockOfClass;
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // Arrange
    const recipient=new VaccineTest();
    // Act
    recipient.inject();
    // Assert
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );

  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // Arrange
    const recipient = new VaccineTest();
    // Act
    mockGetHasAntibodies.mockReturnValue(true);
    const result=recipient.test();
    // Assert
    expect(result).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // Arrange
    const recipient = new VaccineTest();
    // Act
    mockGetHasAntibodies.mockReturnValue(false);
    const result=recipient.test();
    // Assert
    expect(result).toBe("Vaccine Test Failed");
  });
});
