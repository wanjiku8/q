import React from 'react';

import logoElle from '../assets/ellewomen.jpg';
import logoNafasi from '../assets/nafasi.jpg';
import logoRecea from '../assets/RECEA.jpg';


const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4c0585, #9B87F5)',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'left'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '1.2rem',
            lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif"
          }}>About Us</h1>
          <p style={{
            fontSize: '0.98rem',
            maxWidth: '1280px',
            margin: '0 auto',
            fontWeight: '200',
            lineHeight: '1.6',
          }}>
            We are a community-driven organization advocating for LGBTQ+ rights, providing essential resources, and fostering a culture of acceptance and equality in Kenya.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#1A1F2C'
              }}>Our Story</h2>
              <p style={{
                marginBottom: '1.5rem',
                lineHeight: '1.8',
                color: '#555'
              }}>
                Welcome to Queer Kenya, a dynamic and inclusive organization dedicated to advancing the rights and well-being of LGBTQ+ individuals across the nation. At Queer Kenya, we believe in the power of community, activism, and education to create a more inclusive and equitable society for all.

Founded on the principles of equality, diversity, and empowerment, Queer Kenya strives to be a beacon of hope and advocacy in the fight against discrimination and stigma faced by LGBTQ+ individuals in Kenya. Our organization is driven by a passionate team of activists, advocates, and allies who are committed to promoting acceptance, challenging injustice, and fostering positive change.

              </p>
              <p style={{
                marginBottom: '1.5rem',
                lineHeight: '1.8',
                color: '#555'
              }}>
                Through a multifaceted approach encompassing advocacy, education, and community engagement, Queer Kenya works tirelessly to address the complex challenges and systemic barriers that LGBTQ+ individuals encounter in their daily lives. From advocating for policy reforms and legal protections to providing support networks and resources, we are dedicated to creating a more inclusive and affirming environment where LGBTQ+ individuals can thrive and live authentically.
              </p>
              <p style={{
                lineHeight: '1.8',
                color: '#555'
              }}>
                Central to our mission is the principle of intersectionality, which recognizes the interconnectedness of LGBTQ+ rights with other social justice movements, including feminism, racial justice, and mental health advocacy. By embracing diversity and amplifying marginalized voices, we strive to build solidarity and foster meaningful collaborations that uplift and empower all members of our community.

Whether you are a member of the LGBTQ+ community, an ally, or simply a supporter of human rights and equality, we invite you to join us in our journey towards a more just and inclusive society. Together, we can create a future where every individual is celebrated for who they are, regardless of their sexual orientation, gender identity, or expression.

              </p>
            </div>
            <div style={{
              backgroundColor: '#f9f5ff',
              borderRadius: '1rem',
              overflow: 'hidden'
            }}>
              <img 
                src="https://img.freepik.com/free-photo/cute-pink-dolphins-water_23-2150866317.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740" 
                alt="Queer Kenya community" 
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                padding: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#1A1F2C'
                }}>Our Mission in Action</h3>
                <p style={{
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  From community workshops to national advocacy campaigns, our dedicated team and volunteers work tirelessly to advance LGBTQ+ rights and provide essential support services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f5ff'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#1A1F2C'
          }}>Our Focus Areas</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              height: '100%'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#9B87F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1A1F2C'
              }}>Advocating for LGBTQ+ Rights & Visibility</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555',
                flex: 1
              }}>
                We work with policymakers, legal experts, and community leaders to advocate for laws and policies that protect LGBTQ+ rights and increase visibility in public discourse.
              </p>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Legal advocacy
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Policy reform
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Media representation
                </li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              height: '100%'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D946EF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1A1F2C'
              }}>Providing Support Networks & Mental Health Resources</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555',
                flex: 1
              }}>
                Our support networks and mental health initiatives provide essential resources for LGBTQ+ individuals facing challenges, discrimination, or mental health concerns.
              </p>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Counseling services
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Support groups
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Crisis intervention
                </li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              height: '100%'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#F97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1A1F2C'
              }}>Creating Safe Spaces for Dialogue, Growth, and Empowerment</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555',
                flex: 1
              }}>
                We create and maintain physical and virtual spaces where LGBTQ+ individuals can connect, share experiences, and grow together in a safe and supportive environment.
              </p>
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Community centers
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Online forums
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#555'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Educational workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Partners Section */}
<section style={{
  padding: '4rem 2rem',
  backgroundColor: 'white'
}}>
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto'
  }}>
    <h2 style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '3rem',
      textAlign: 'center',
      color: '#1A1F2C'
    }}>Our Partners</h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      alignItems: 'center'
    }}>
      
      {/* Elle Women */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: '#f9f5ff'
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <img
            src={logoElle}
            alt="Elle Women Logo"
            style={{ width: '130px', height: '130px', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Supporting women's empowerment and LGBTQ+ initiatives across Kenya.
        </p>
      </div>

      {/* Nafasi */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: '#f9f5ff'
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <img
            src={logoNafasi}
            alt="Nafasi Logo"
            style={{ width: '130px', height: '130px', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Creating spaces for artistic expression and cultural diversity in East Africa.
        </p>
      </div>

      {/* RECEA */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: '#f9f5ff'
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <img
            src={logoRecea}
            alt="RECEA Logo"
            style={{ width: '130px', height: '130px', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Regional coalition for equality advocacy across East African countries.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#9B87F5',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>Join Our Community</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Be part of our journey toward equality and inclusion. 
            There are many ways to get involved, from volunteering to attending events.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/join-us" style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#9B87F5',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}>Get Involved</a>
            <a href="/events" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid white',
              textDecoration: 'none'
            }}>Upcoming Events</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;