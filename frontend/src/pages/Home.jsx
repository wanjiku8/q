import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  
  const slides = [
    {
      title: "Empowering LGBTQ+ Voices in Kenya",
      description: "We work tirelessly to advocate for the rights and well-being of the queer community.",
      bgColor: "linear-gradient(135deg, #9B87F5, #D946EF)"
    },
    {
      title: "Creating Safe Spaces",
      description: "Our community centers provide support and resources for LGBTQ+ individuals across Kenya.",
      bgColor: "linear-gradient(135deg, #D946EF, #F97316)"
    },
    {
      title: "Education and Awareness",
      description: "Through workshops and campaigns, we're changing minds and building a more inclusive society.",
      bgColor: "linear-gradient(135deg, #F97316, #0EA5E9)"
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  // Responsive styles
  const heroStyles = {
    padding: isMobile ? '4rem 1rem' : isTablet ? '5rem 2rem' : '6rem 3rem',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: isMobile ? 'wrap-reverse' : 'nowrap',
    gap: isMobile ? '2rem' : '3rem',
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const heroTitleStyles = {
    fontSize: isMobile ? '2.5rem' : isTablet ? '3.5rem' : '4rem',
    fontWeight: 900,
    marginBottom: isMobile ? '1rem' : '1.5rem',
    lineHeight: '1.1',
    fontFamily: "'Poppins', sans-serif",
  };

  const heroTextStyles = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    fontWeight: 300,
    lineHeight: '1.6',
    marginBottom: isMobile ? '1.5rem' : '2.5rem',
    maxWidth: '600px',
    fontFamily: "'Poppins', sans-serif",
  };

  const diversitySectionStyles = {
    padding: isMobile ? '3rem 1rem' : '5rem 2rem',
    backgroundColor: '#f8f6f7',
  };

  const diversityGridStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    alignItems: 'center',
    gap: isMobile ? '1.5rem' : '2rem',
  };

  const diversityTitleStyles = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    fontWeight: '800',
    marginBottom: '1rem',
    color: '#1a1f2c',
    fontFamily: "'Poppins', sans-serif",
    textAlign: isMobile ? 'center' : 'left',
  };

  const diversityTextStyles = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    fontWeight: 300,
    color: '#374151',
    lineHeight: '1.75',
    fontFamily: "'Poppins', sans-serif",
    padding: isMobile ? '0 0.5rem' : 0,
    textAlign: isMobile ? 'center' : 'left',
  };

  const impactSectionStyles = {
    padding: isMobile ? '2rem 1rem' : '5rem 2rem',
    background: 'linear-gradient(135deg, #ecf0ff 0%, #fdf2f8 100%)'
  };

  const impactTitleStyles = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: isMobile ? '1.5rem' : '2.5rem',
    color: '#2D2A45',
    lineHeight: '1.1',
    fontFamily: "'Poppins', sans-serif",
  };

  const sliderContainerStyles = {
    position: 'relative',
    height: isMobile ? '380px' : isTablet ? '300px' : '320px',
    overflow: 'hidden',
    borderRadius: isMobile ? '0.75rem' : '1.25rem',
    boxShadow: isMobile ? '0 6px 18px rgba(0,0,0,0.08)' : '0 12px 25px rgba(0,0,0,0.08)',
  };

  const slideContentStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    opacity: 0,
    transition: 'opacity 0.6s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
    textAlign: 'center',
    boxSizing: 'border-box'
  };

  const activeSlideStyles = {
    ...slideContentStyles,
    position: 'relative',
    opacity: 1
  };

  const slideTitleStyles = {
    fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
    fontWeight: '700',
    marginBottom: isMobile ? '0.5rem' : '1rem',
    fontFamily: "'Poppins', sans-serif",
  };

  const slideTextStyles = {
    fontSize: isMobile ? '0.9375rem' : '1.125rem',
    fontWeight: 300,
    maxWidth: '650px',
    margin: isMobile ? '0.5rem 0 1.5rem' : '1rem 0 2rem',
    lineHeight: isMobile ? '1.6' : '1.8',
  };

  const navButtonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    width: '42px',
    height: '42px',
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'white',
          zIndex: 0,
          borderRadius: '1rem'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          flex: '1 1 500px',
          color: 'black',
        }}>
          <h1 style={heroTitleStyles}>Be Proud. Be Bold. Be You.</h1>
          <p style={heroTextStyles}>
            Whether you are a member of the LGBTQ+ community, an ally, or simply a supporter of human rights and equality, we invite you to join us in our journey towards a more just and inclusive society. Together, we can create a future where every individual is celebrated for who they are, regardless of their sexual orientation, gender identity, or expression.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              backgroundColor: '#fff',
              color: '#9333ea',
              fontWeight: '600',
              padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}>
              Get Involved
            </Link>
            <Link to="/stories" style={{
              backgroundColor: 'transparent',
              border: '2px solid black',
              color: 'black',
              fontWeight: '600',
              padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}>
              Hear Our Stories
            </Link>
          </div>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          flex: '1 1 400px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img
            src="https://img.freepik.com/free-vector/watercolor-gender-pronouns-illustration_23-2150462592.jpg"
            alt="Illustration of community pride"
            style={{
              width: '100%',
              maxWidth: isMobile ? '380px' : '450px',
              height: 'auto',
              borderRadius: '1rem',
            }}
          />
        </div>
      </section>

      {/* Celebrating Diversity Section */}
      <section style={diversitySectionStyles}>
        <div style={diversityGridStyles}>
          <div style={{ 
            textAlign: 'center',
            order: isMobile ? 1 : 0,
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2620/2620997.png"
              alt="Community Pride"
              style={{
                maxWidth: '100%',
                width: isMobile ? '240px' : isTablet ? '300px' : '350px',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                margin: '0 auto',
              }}
            />
          </div>

          <div>
            <h2 style={diversityTitleStyles}>
              Celebrating Diversity, Embracing Unity
            </h2>
            <p style={diversityTextStyles}>
                     
             <strong>Queer Kenya</strong>  works tirelessly to address the complex challenges and systemic barriers that LGBTQ+ individuals encounter in their daily lives. From advocating for policy reforms and legal protections to providing support networks and resources, we are dedicated to creating a more inclusive and affirming environment where LGBTQ+ individuals can thrive and live authentically.
            
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section style={impactSectionStyles}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={impactTitleStyles}>Our Impact</h2>

          <div style={sliderContainerStyles}>
            {slides.map((slide, index) => (
              <div 
                key={index}
                style={{ 
                  ...(index === currentSlide ? activeSlideStyles : slideContentStyles),
                  background: slide.bgColor 
                }}
              >
                <h3 style={slideTitleStyles}>{slide.title}</h3>
                <p style={slideTextStyles}>{slide.description}</p>
                <Link to="/about" style={{
                  backgroundColor: '#fff',
                  color: '#9333ea',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                }}>
                  Learn More
                </Link>
              </div>
            ))}

            {/* Only show navigation buttons on tablet/desktop */}
            {!isMobile && (
              <>
                <button 
                  onClick={prevSlide}
                  style={{
                    ...navButtonStyles,
                    left: '1rem',
                  }}
                  aria-label="Previous slide"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="#9333ea" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M15 18L9 12L15 6" />
                  </svg>
                </button>

                <button 
                  onClick={nextSlide}
                  style={{
                    ...navButtonStyles,
                    right: '1rem',
                  }}
                  aria-label="Next slide"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="#9333ea" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 6L15 12L9 18" />
                  </svg>
                </button>
              </>
            )}

            <div style={{
              position: 'absolute',
              bottom: isMobile ? '1.25rem' : '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: isMobile ? '0.5rem' : '0.6rem'
            }}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: isMobile ? '10px' : '12px',
                    height: isMobile ? '10px' : '12px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? '#9333ea' : '#e5e7eb',
                    border: isMobile ? '1px solid white' : '2px solid white',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: isMobile ? '2rem' : '2.5rem',
            color: '#2D2A45',
            lineHeight: '1.1',
            fontFamily: "'Poppins', sans-serif",
          }}>Our Foundation</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#9B87F5',
                padding: isMobile ? '1.5rem' : '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width={isMobile ? '40' : '48'} height={isMobile ? '40' : '48'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H5M22 12H19M12 2V5M12 19V22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M16.95 7.05L19.07 4.93M4.93 19.07L7.05 16.95" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2"/>
                </svg>
                <h3 style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Vision</h3>
              </div>
              <div style={{
                padding: isMobile ? '1.5rem' : '2rem'
              }}>
                <p style={{
                  lineHeight: '1.6',
                  color: '#555',
                  fontSize: isMobile ? '0.9375rem' : '1rem'
                }}>
To create a Kenya where LGBTQ+ individuals are embraced, empowered, and celebrated as equal members of society, free from discrimination and stigma                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#D946EF',
                padding: isMobile ? '1.5rem' : '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width={isMobile ? '40' : '48'} height={isMobile ? '40' : '48'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 22V12M5 8V2M19 22V16M19 12V2M12 22V16M12 12V2M1 12H9M15 16H23M9 6H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Mission</h3>
              </div>
              <div style={{
                padding: isMobile ? '1.5rem' : '2rem'
              }}>
                <p style={{
                  lineHeight: '1.6',
                  color: '#555',
                  fontSize: isMobile ? '0.9375rem' : '1rem'
                }}>
                  Queer Kenya is dedicated to advocating for the rights, well-being, and inclusion of LGBTQ+ individuals across Kenya. Through education, activism, and community engagement, we strive to promote equality, dismantle systemic barriers, and foster a culture of acceptance and respect. Our mission is rooted in intersectionality, recognizing the interconnectedness of LGBTQ+ rights with feminism, mental health, and other social justice movements
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#F97316',
                padding: isMobile ? '1.5rem' : '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width={isMobile ? '40' : '48'} height={isMobile ? '40' : '48'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.93 4.93L9.17 9.17M14.83 14.83L19.07 19.07M19.07 4.93L14.83 9.17M9.17 14.83L4.93 19.07M8.57 2.38C9.63 2.13 10.76 2 12 2C17.52 2 22 6.48 22 12C22 13.24 21.87 14.37 21.62 15.43M16 16C15.42 16.4 14.74 16.68 14 16.8M10 16.8C9.26 16.68 8.58 16.4 8 16M7.2 10C7.32 9.26 7.6 8.58 8 8M16.8 10C16.68 9.26 16.4 8.58 16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="1" stroke="white" strokeWidth="2"/>
                </svg>
                <h3 style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Values</h3>
              </div>
              <div style={{
                padding: isMobile ? '1.5rem' : '2rem'
              }}>
                <ul style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#9B87F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Respect for human dignity</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#D946EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Inclusivity and diversity</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#F97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Social justice and equality</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#555',
                      marginBottom:'13px',

                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#0EA5E9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Community empowerment</span>
                  </li>

                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#9B87F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Intersectionality</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#D946EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Feminism and Gender Equality</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555',
                    fontSize: isMobile ? '0.9375rem' : '1rem'
                  }}>
                    <div style={{
                      minWidth: isMobile ? '20px' : '24px',
                      height: isMobile ? '20px' : '24px',
                      borderRadius: '50%',
                      backgroundColor: '#F97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>✓</div>
                    <span>Mental health and Well-being</span>
                  </li>
                 
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        backgroundColor: '#1A1F2C',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            marginBottom: isMobile ? '1.25rem' : '1.5rem',
            fontWeight: '800',
            lineHeight: '1.1',
            fontFamily: "'Poppins', sans-serif",
          }}>Join Our Movement</h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            lineHeight: '1.6',
          }}>
            Together, we can create a more inclusive and accepting Kenya. 
            Whether you're looking for support, want to volunteer, or are interested in our advocacy work,
            we welcome you to be part of our community.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: '#9B87F5',
              color: 'white',
              fontWeight: '600',
              padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}>Join Us</Link>
            <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#9B87F5',
              fontWeight: '600',
              padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid #9B87F5',
              textDecoration: 'none',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}>Contact Us</Link>
            <Link to="/about" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: '600',
              padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid white',
              textDecoration: 'none',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}>Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;